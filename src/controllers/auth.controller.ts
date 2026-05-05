import { Request, Response } from "express";
import { randomBytes, scrypt as scryptCallback } from "crypto";
import { promisify } from "util";
import { client } from "../db";

const scrypt = promisify(scryptCallback);

const hashPassword = async (password: string): Promise<string> => {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = (await scrypt(password, salt, 64)) as Buffer;
  return `${salt}:${derivedKey.toString("hex")}`;
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
    const passwordHash = await hashPassword(password);

    const result = await client.query(
      `INSERT INTO users (first_name, last_name, date_of_birth, email, phone, password, picture)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, first_name, last_name, date_of_birth, email, phone, picture, created_at, updated_at, is_active`,
      [first_name, last_name, date_of_birth, email, phone ?? null, passwordHash, picture ?? null]
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
