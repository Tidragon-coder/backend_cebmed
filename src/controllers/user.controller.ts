import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/middleware";
import { prisma } from "../lib/prisma";

export const updateFcmToken = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user?.id) return res.status(401).json({ message: "Non autorisé" });

  const userId = parseInt(req.params.id, 10);
  if (req.user.id !== userId) return res.status(403).json({ message: "Accès refusé" });

  const { token } = req.body;
  if (!token || typeof token !== "string") {
    return res.status(400).json({ message: "token requis" });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { fcmToken: token },
  });

  return res.json({ ok: true });
};
