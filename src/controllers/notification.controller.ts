import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/middleware";
import { prisma as defaultPrisma } from "../lib/prisma";

export async function saveFcmToken(req: AuthenticatedRequest, res: Response, db = defaultPrisma): Promise<void> {
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Non autorisé" });
    return;
  }

  const { token } = req.body;
  if (!token || typeof token !== "string") {
    res.status(400).json({ message: "Token manquant" });
    return;
  }

  await db.user.update({
    where: { id: userId },
    data: { fcmToken: token },
  });

  res.json({ ok: true });
}
