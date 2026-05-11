import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";

const SECRET = process.env.JWT_SECRET;

type AuthenticatedRequest = Request & {
  user?: {
    id?: string;
    email?: string;
    name?: string;
  };
};

const isValidDate = (value: string): boolean => {
  const date = new Date(value);
  return !Number.isNaN(date.getTime());
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

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.firstName },
      SECRET,
      { expiresIn: "24h" }
    );

    return res.json({ token });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({ message: "Erreur serveur" });
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
