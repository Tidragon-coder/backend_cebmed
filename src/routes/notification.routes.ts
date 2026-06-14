import { Router } from "express";
import { authenticate } from "../middlewares/middleware";
import { saveFcmToken } from "../controllers/notification.controller";

const router = Router();

/**
 * @swagger
 * /api/notifications/fcm-token:
 *   post:
 *     summary: Enregistre ou met à jour le FCM token de l'utilisateur connecté
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token]
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token enregistré
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *       400:
 *         description: Token manquant
 *       401:
 *         description: Non autorisé
 */
router.post("/fcm-token", authenticate, saveFcmToken);

export default router;
