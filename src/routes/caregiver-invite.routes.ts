import { Router } from "express";
import { authenticate } from "../middlewares/middleware";
import {
  createCaregiverInvite,
  redeemCaregiverInvite,
  getMyCaregiverInvites,
} from "../controllers/caregiver-invite.controller";

const router = Router();

/**
 * @swagger
 * /api/caregiver-invites:
 *   post:
 *     summary: Créer une invitation aidant
 *     tags: [Caregiver Invites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Invitation créée
 */
router.post("/", authenticate, createCaregiverInvite);

/**
 * @swagger
 * /api/caregiver-invites/redeem:
 *   post:
 *     summary: Utiliser un code d'invitation
 *     tags: [Caregiver Invites]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: ABC123XYZ
 *     responses:
 *       200:
 *         description: Invitation acceptée
 */
router.post("/redeem", authenticate, redeemCaregiverInvite);

/**
 * @swagger
 * /api/caregiver-invites/mine:
 *   get:
 *     summary: Voir mes invitations
 *     tags: [Caregiver Invites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des invitations
 */
router.get("/mine", authenticate, getMyCaregiverInvites);

export default router;