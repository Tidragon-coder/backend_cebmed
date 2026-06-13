import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/middleware";
import { prisma } from "../lib/prisma";

export async function saveFcmToken(req: AuthenticatedRequest, res: Response): Promise<void> {
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

  await prisma.user.update({
    where: { id: userId },
    data: { fcmToken: token },
  });

  res.json({ ok: true });
}
