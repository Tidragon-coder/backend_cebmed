import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";
import crypto from "crypto";

const SECRET = process.env.JWT_SECRET;

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

  if (typeof password !== "string" || password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters" });
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
    return res.status(500).json({ message: "JWT_SECRET non configure" });
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
      { id: user.id, email: user.email, name: user.firstName },
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

export const refresh = async (req: Request, res: Response) => {
  const { refresh_token } = req.body;

  if (typeof refresh_token !== 'string' || refresh_token.length === 0) {
    return res.status(400).json({ message: 'refresh_token is required' });
  }

  if (!SECRET) return res.status(500).json({ message: 'JWT_SECRET non configure' });

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
    return res.status(401).json({ message: "Utilisateur non connecte" });
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
    return res.status(401).json({ message: "Utilisateur non connecte" });
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
    return res.status(401).json({ message: "Utilisateur non connecte" });
  }

  const { current_password, new_password } = req.body;

  if (typeof current_password !== "string" || current_password.length === 0) {
    return res.status(400).json({ message: "current_password is required" });
  }

  if (typeof new_password !== "string" || new_password.length < 8) {
    return res.status(400).json({ message: "new_password must be at least 8 characters" });
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
    return res.status(401).json({ message: "Utilisateur non connecte" });
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
    if (!req.user?.id) return res.status(401).json({ message: 'Utilisateur non connecte' });

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