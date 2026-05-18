import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { syncNewsletterContactToBrevo } from "../services/brevo.service";

export const addNewsletterMail = async (req: Request, res: Response) => {
  const { email, accept_conditions } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Email requis" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ message: "Email invalide" });
  }

  if (accept_conditions !== true) {
    return res.status(400).json({ message: "Conditions obligatoires" });
  }

  try {
    const newsletter = await prisma.newsletter.create({
      data: {
        email,
        accept_conditions,
        accepted_at: new Date(),
      },
      select: {
        id: true,
        email: true,
        accept_conditions: true,
        accepted_at: true,
      },
    });

    // Keep DB write successful even if Brevo is down.
    syncNewsletterContactToBrevo(email).catch((err) => {
      console.error("Brevo sync error", err);
    });

    return res.status(201).json({
      message: "Inscription réussie",
      data: newsletter,
    });
  } catch (error: unknown) {
    const prismaError = error as { code?: string };

    if (prismaError.code === "P2002") {
      return res.status(409).json({ message: "Email already exists" });
    }

    console.error("Add newsletter mail error", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
