import { Router } from "express";
import { authenticate } from "../middlewares/middleware";
import { updateFcmToken } from "../controllers/user.controller";

const router = Router();

router.use(authenticate);

/**
 * @swagger
 * /api/users/{id}/fcm-token:
 *   post:
 *     summary: Enregistre ou met à jour le FCM token d'un utilisateur
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
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
 *       403:
 *         description: Accès refusé
 */
router.post("/:id/fcm-token", updateFcmToken);

export default router;
