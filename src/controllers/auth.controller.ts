import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { client } from "../db";

const SECRET = process.env.JWT_SECRET;

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

    const result = await client.query(
      `INSERT INTO users (first_name, last_name, date_of_birth, email, phone, password, picture)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, first_name, last_name, date_of_birth, email, phone, picture, created_at, updated_at, is_active`,
      [first_name, last_name, date_of_birth, normalizedEmail, phone ?? null, passwordHash, picture ?? null]
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (error: unknown) {
    const pgError = error as { code?: string };

    if (pgError.code === "23505") {
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

    const result = await client.query(
      "SELECT id, email, first_name, password, is_active FROM users WHERE email = $1 LIMIT 1",
      [normalizedEmail]
    );

    const user = result.rows[0];

    if (!user || !user.is_active) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.first_name },
      SECRET,
      { expiresIn: "24h" }
    );

    return res.json({ token });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
