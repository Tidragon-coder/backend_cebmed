import { Router } from "express";
import { authenticate } from "../middlewares/middleware";
import {
  createCaregiverInvite,
  redeemCaregiverInvite,
  getMyCaregiverInvites,
  getCaregiverPermissions,
  updateCaregiverPermissions,
} from "../controllers/caregiver-invite.controller";

const router = Router();

/**
 * @swagger
 * /api/caregiver-invites:
 *   post:
 *     summary: Creer une invitation aidant
 *     tags: [Caregiver Invites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Invitation creee
 *       401:
 *         description: Non authentifie
 */
router.post("/", authenticate, createCaregiverInvite);

/**
 * @swagger
 * /api/caregiver-invites/redeem:
 *   post:
 *     summary: Utiliser un code de partage patient
 *     tags: [Caregiver Invites]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [code]
 *             properties:
 *               code:
 *                 type: string
 *                 example: ELSQVP
 *     responses:
 *       200:
 *         description: Invitation acceptee
 *       400:
 *         description: Code invalide, expire ou deja utilise
 *       404:
 *         description: Invitation introuvable
 */
router.post("/redeem", authenticate, redeemCaregiverInvite);

/**
 * @swagger
 * /api/caregiver-invites/mine:
 *   get:
 *     summary: Recuperer mes invitations et relations aidant
 *     tags: [Caregiver Invites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Invitations et relations recuperes
 *       401:
 *         description: Non authentifie
 */
router.get("/mine", authenticate, getMyCaregiverInvites);

/**
 * @swagger
 * /api/caregiver-invites/permissions/{relationId}:
 *   get:
 *     summary: Lire les permissions d'un aidant pour une relation
 *     tags: [Caregiver Invites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: relationId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la relation user_caregivers
 *     responses:
 *       200:
 *         description: Permissions recuperees
 *       400:
 *         description: relationId invalide
 *       404:
 *         description: Relation introuvable
 */
router.get("/permissions/:relationId", authenticate, getCaregiverPermissions);

/**
 * @swagger
 * /api/caregiver-invites/permissions/{relationId}:
 *   patch:
 *     summary: Mettre a jour les permissions d'un aidant pour une relation
 *     tags: [Caregiver Invites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: relationId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la relation user_caregivers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               can_view_agenda:
 *                 type: boolean
 *               can_edit_agenda:
 *                 type: boolean
 *               can_view_documents:
 *                 type: boolean
 *               can_upload_documents:
 *                 type: boolean
 *               can_view_stock:
 *                 type: boolean
 *               can_edit_stock:
 *                 type: boolean
 *               can_view_profile:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Permissions mises a jour
 *       400:
 *         description: relationId invalide ou body vide
 *       404:
 *         description: Relation introuvable
 */
router.patch("/permissions/:relationId", authenticate, updateCaregiverPermissions);

export default router;
