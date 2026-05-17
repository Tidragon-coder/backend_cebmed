import { Response } from "express";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middlewares/middleware";

const CODE_LENGTH = 6;
const EXPIRY_HOURS = 48;

const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const randomCode = (): string => {
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
};

const getUserId = (req: AuthenticatedRequest, res: Response): number | null => {
  if (!req.user?.id) {
    res.status(401).json({ message: "Utilisateur non authentifié" });
    return null;
  }
  return req.user.id;
};

export const createCaregiverInvite = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = getUserId(req, res);
  if (!userId) return;

  try {
    let code = randomCode();
    for (let i = 0; i < 5; i += 1) {
      const exists = await prisma.caregiverInvite.findUnique({ where: { code } });
      if (!exists) break;
      code = randomCode();
    }

    const expiresAt = new Date(Date.now() + EXPIRY_HOURS * 60 * 60 * 1000);

    const invite = await prisma.caregiverInvite.create({
      data: {
        patient_id: userId,
        code,
        expires_at: expiresAt,
      },
      select: {
        id: true,
        code: true,
        status: true,
        expires_at: true,
        created_at: true,
      },
    });

    return res.status(201).json(invite);
  } catch (error) {
    console.error("Erreur creation invitation aidant", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const redeemCaregiverInvite = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const rawCode = req.body?.code;
  if (typeof rawCode !== "string" || rawCode.trim().length < 4) {
    return res.status(400).json({ message: "Code invalide" });
  }
  const code = rawCode.trim().toUpperCase();

  try {
    const invite = await prisma.caregiverInvite.findUnique({
      where: { code },
    });

    if (!invite) {
      return res.status(404).json({ message: "Invitation introuvable" });
    }

    if (invite.status !== "PENDING") {
      return res.status(400).json({ message: "Invitation déjà utilisée ou invalide" });
    }

    if (invite.expires_at.getTime() < Date.now()) {
      await prisma.caregiverInvite.update({
        where: { id: invite.id },
        data: { status: "EXPIRED" },
      });
      return res.status(400).json({ message: "Invitation expirée" });
    }

    if (invite.patient_id === userId) {
      return res.status(400).json({ message: "Tu ne peux pas utiliser ton propre code" });
    }

    const existing = await prisma.userCaregiver.findFirst({
      where: {
        user_id: invite.patient_id,
        caregiver_id: userId,
      },
    });

    if (!existing) {
      await prisma.userCaregiver.create({
        data: {
          user_id: invite.patient_id,
          caregiver_id: userId,
          status: "ACCEPTED",
        },
      });
    } else if (existing.status !== "ACCEPTED") {
      await prisma.userCaregiver.update({
        where: { id: existing.id },
        data: { status: "ACCEPTED" },
      });
    }

    const updatedInvite = await prisma.caregiverInvite.update({
      where: { id: invite.id },
      data: {
        status: "ACCEPTED",
        used_by_user_id: userId,
      },
      select: {
        id: true,
        code: true,
        status: true,
        patient_id: true,
        used_by_user_id: true,
        updated_at: true,
      },
    });

    return res.status(200).json({
      message: "Invitation acceptée",
      data: updatedInvite,
    });
  } catch (error) {
    console.error("Erreur validation invitation aidant", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const getMyCaregiverInvites = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = getUserId(req, res);
  if (!userId) return;

  try {
    const createdInvites = await prisma.caregiverInvite.findMany({
      where: { patient_id: userId },
      orderBy: { created_at: "desc" },
      select: {
        id: true,
        code: true,
        status: true,
        expires_at: true,
        used_by_user_id: true,
        created_at: true,
      },
    });

    const redeemedInvites = await prisma.caregiverInvite.findMany({
      where: { used_by_user_id: userId },
      orderBy: { updated_at: "desc" },
      select: {
        id: true,
        code: true,
        status: true,
        patient_id: true,
        updated_at: true,
      },
    });

    return res.status(200).json({
      created_count: createdInvites.length,
      redeemed_count: redeemedInvites.length,
      created: createdInvites,
      redeemed: redeemedInvites,
    });
  } catch (error) {
    console.error("Erreur chargement invitations aidant", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

