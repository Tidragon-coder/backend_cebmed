import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";
import crypto from "crypto";

const SECRET = process.env.JWT_SECRET;
const PASSWORD_RESET_CODE_TTL_MS = 10 * 60 * 1000;

const passwordResetCodes = new Map<string, { codeHash: string; expiresAt: Date }>();

type AuthenticatedRequest = Request & {
  user?: {
    id?: number;
    email?: string;
    name?: string;
  };
};

const isValidDate = (value: string): boolean => {
  const date = new Date(value);
  return !Number.isNaN(date.getTime());
};

function generateRefreshToken(): string {
  return crypto.randomBytes(64).toString('hex');
}

function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function isStrongPassword(password: string): boolean {
  return password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[^a-zA-Z\d]/.test(password);
}

const strongPasswordMessage =
  "Le mot de passe doit contenir au moins 8 caractères, 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial";

function generatePasswordResetCode(): string {
  return String(crypto.randomInt(10000, 100000));
}

const sendPasswordResetEmail = async (email: string, code: string): Promise<void> => {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "noreply@cebmed.fr";
  const senderName = process.env.BREVO_SENDER_NAME ?? "CEBMED";

  if (!apiKey) {
    console.log(`[Password reset] Code pour ${email}: ${code}`);
    return;
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email }],
      subject: "Code de réinitialisation CEBMED",
      htmlContent: `<p>Votre code de réinitialisation CEBMED est :</p><h2>${code}</h2><p>Ce code expire dans 10 minutes.</p>`,
      textContent: `Votre code de réinitialisation CEBMED est : ${code}. Ce code expire dans 10 minutes.`,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Brevo password reset failed (${response.status}): ${text}`);
  }
};

export const register = async (req: Request, res: Response) => {
  const { first_name, last_name, date_of_birth, email, phone, password, picture } = req.body;

  if (!first_name || !last_name || !date_of_birth || !email || !password) {
    return res.status(400).json({
      message: "Missing required fields: first_name, last_name, date_of_birth, email, password",
    });
  }

  if (typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (typeof password !== "string" || !isStrongPassword(password)) {
    return res.status(400).json({ message: strongPasswordMessage });
  }

  if (typeof date_of_birth !== "string" || !isValidDate(date_of_birth)) {
    return res.status(400).json({ message: "Invalid date_of_birth" });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const passwordHash = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
      data: {
        firstName: first_name,
        lastName: last_name,
        dateOfBirth: new Date(date_of_birth),
        email: normalizedEmail,
        phone: phone ?? null,
        password: passwordHash,
        picture: picture ?? null,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        email: true,
        phone: true,
        picture: true,
        createdAt: true,
        updatedAt: true,
        isActive: true,
      },
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: createdUser,
    });
  } catch (error: unknown) {
    const prismaError = error as { code?: string };

    if (prismaError.code === "P2002") {
      return res.status(409).json({ message: "Email already exists" });
    }

    console.error("Register error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (typeof password !== "string" || password.length === 0) {
    return res.status(400).json({ message: "Password is required" });
  }

  if (!SECRET) {
    return res.status(500).json({ message: "JWT_SECRET non configuré" });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        id: true,
        email: true,
        firstName: true,
        password: true,
        isActive: true,
        isPremium: true,
        isAdmin: true,
      },
    });

    if (!user || !user.isActive) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email, name: user.firstName, isPremium: user.isPremium, isAdmin: user.isAdmin },
      SECRET,
      { expiresIn: '15m' }
    );

    const rawRefreshToken = generateRefreshToken();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 jours

    await prisma.refreshToken.create({
      data: {
        token_hash: hashToken(rawRefreshToken),
        user_id: user.id,
        expires_at: expiresAt,
      },
    });

    return res.json({ access_token: accessToken, refresh_token: rawRefreshToken });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

export const requestPasswordReset = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ message: "Email invalide" });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: { id: true, isActive: true },
    });

    // Same success response to avoid revealing whether an email exists.
    if (!user || !user.isActive) {
      return res.status(200).json({
        message: "Si ce compte existe, un code de réinitialisation a été envoyé",
      });
    }

    const code = generatePasswordResetCode();
    passwordResetCodes.set(normalizedEmail, {
      codeHash: hashToken(code),
      expiresAt: new Date(Date.now() + PASSWORD_RESET_CODE_TTL_MS),
    });

    await sendPasswordResetEmail(normalizedEmail, code);

    return res.status(200).json({
      message: "Si ce compte existe, un code de réinitialisation a été envoyé",
    });
  } catch (error) {
    console.error("Request password reset error", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, code, new_password } = req.body;

  if (typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ message: "Email invalide" });
  }

  if (typeof code !== "string" || code.trim().length !== 5) {
    return res.status(400).json({ message: "Code invalide" });
  }

  if (typeof new_password !== "string" || !isStrongPassword(new_password)) {
    return res.status(400).json({ message: strongPasswordMessage });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const stored = passwordResetCodes.get(normalizedEmail);

  if (!stored || stored.expiresAt.getTime() < Date.now()) {
    passwordResetCodes.delete(normalizedEmail);
    return res.status(400).json({ message: "Code expiré ou invalide" });
  }

  if (stored.codeHash !== hashToken(code.trim())) {
    return res.status(400).json({ message: "Code expiré ou invalide" });
  }

  try {
    const passwordHash = await bcrypt.hash(new_password, 10);

    await prisma.user.update({
      where: { email: normalizedEmail },
      data: { password: passwordHash },
      select: { id: true },
    });

    passwordResetCodes.delete(normalizedEmail);

    return res.status(200).json({ message: "Mot de passe réinitialisé" });
  } catch (error) {
    console.error("Reset password error", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

export const refresh = async (req: Request, res: Response) => {
  const { refresh_token } = req.body;

  if (typeof refresh_token !== 'string' || refresh_token.length === 0) {
    return res.status(400).json({ message: 'refresh_token is required' });
  }

  if (!SECRET) return res.status(500).json({ message: 'JWT_SECRET non configuré' });

  try {
    const stored = await prisma.refreshToken.findUnique({
      where: { token_hash: hashToken(refresh_token) },
      select: {
        id: true,
        expires_at: true,
        user: { select: { id: true, email: true, firstName: true, isActive: true } },
      },
    });

    if (!stored || stored.expires_at < new Date()) {
      if (stored) await prisma.refreshToken.delete({ where: { id: stored.id } });
      return res.status(401).json({ message: 'Refresh token invalide ou expiré' });
    }

    if (!stored.user.isActive) {
      return res.status(401).json({ message: 'Compte inactif' });
    }

    const newRaw = generateRefreshToken();
    const newExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await prisma.$transaction([
      prisma.refreshToken.delete({ where: { id: stored.id } }),
      prisma.refreshToken.create({
        data: { token_hash: hashToken(newRaw), user_id: stored.user.id, expires_at: newExpiresAt },
      }),
    ]);

    const accessToken = jwt.sign(
      { id: stored.user.id, email: stored.user.email, name: stored.user.firstName },
      SECRET,
      { expiresIn: '15m' }
    );

    return res.json({ access_token: accessToken, refresh_token: newRaw });
  } catch (err) {
    console.error('Refresh error', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const me = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user?.id) {
    return res.status(401).json({ message: "Utilisateur non connecté" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        email: true,
        phone: true,
        picture: true,
        createdAt: true,
        updatedAt: true,
        isActive: true,
        isPremium: true,
        isAdmin: true
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    return res.json({ user });
  } catch (err) {
    console.error("Me error", err);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

export const updateMe = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user?.id) {
    return res.status(401).json({ message: "Utilisateur non connecté" });
  }

  const { first_name, last_name, date_of_birth, email, phone, picture } = req.body;

  if (
    first_name === undefined &&
    last_name === undefined &&
    date_of_birth === undefined &&
    email === undefined &&
    phone === undefined &&
    picture === undefined
  ) {
    return res.status(400).json({ message: "No updatable fields provided" });
  }

  if (email !== undefined && (typeof email !== "string" || !email.includes("@"))) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (date_of_birth !== undefined && (typeof date_of_birth !== "string" || !isValidDate(date_of_birth))) {
    return res.status(400).json({ message: "Invalid date_of_birth" });
  }

  const data: {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    email?: string;
    phone?: string | null;
    picture?: string | null;
  } = {};

  if (typeof first_name === "string") {
    data.firstName = first_name.trim();
  }

  if (typeof last_name === "string") {
    data.lastName = last_name.trim();
  }

  if (typeof date_of_birth === "string") {
    data.dateOfBirth = new Date(date_of_birth);
  }

  if (typeof email === "string") {
    data.email = email.trim().toLowerCase();
  }

  if (phone !== undefined) {
    data.phone = phone === null ? null : String(phone);
  }

  if (picture !== undefined) {
    data.picture = picture === null ? null : String(picture);
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        email: true,
        phone: true,
        picture: true,
        updatedAt: true,
      },
    });

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error: unknown) {
    const prismaError = error as { code?: string };

    if (prismaError.code === "P2002") {
      return res.status(409).json({ message: "Email already exists" });
    }

    console.error("Update me error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateMyPassword = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user?.id) {
    return res.status(401).json({ message: "Utilisateur non connecté" });
  }

  const { current_password, new_password } = req.body;

  if (typeof current_password !== "string" || current_password.length === 0) {
    return res.status(400).json({ message: "current_password is required" });
  }

  if (typeof new_password !== "string" || !isStrongPassword(new_password)) {
    return res.status(400).json({ message: strongPasswordMessage });
  }

  if (new_password === current_password) {
    return res.status(400).json({ message: "new_password must be different from current_password" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        password: true,
        isActive: true,
      },
    });

    if (!user || !user.isActive) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    const isValidCurrentPassword = await bcrypt.compare(current_password, user.password);
    if (!isValidCurrentPassword) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    const newPasswordHash = await bcrypt.hash(new_password, 10);

    await prisma.user.update({
      where: { id: req.user.id },
      data: {
        password: newPasswordHash,
      },
      select: {
        id: true,
      },
    });

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Update password error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteMe = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user?.id) {
    return res.status(401).json({ message: "Utilisateur non connecté" });
  }

  const { password } = req.body;

  if (typeof password !== "string" || password.length === 0) {
    return res.status(400).json({ message: "password is required" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        password: true,
        isActive: true,
      },
    });

    if (!user || !user.isActive) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    await prisma.user.delete({
      where: { id: req.user.id },
      select: { id: true },
    });

    return res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Delete account error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

  export const logout = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user?.id) return res.status(401).json({ message: 'Utilisateur non connecté' });

    const { refresh_token } = req.body;

    if (typeof refresh_token !== 'string' || refresh_token.length === 0) {
      return res.status(400).json({ message: 'refresh_token is required' });
    }

    try {
      await prisma.refreshToken.deleteMany({
        where: { token_hash: hashToken(refresh_token), user_id: req.user.id },
      });
      return res.status(200).json({ message: 'Déconnecté avec succès' });
    } catch (err) {
      console.error('Logout error', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
  };
