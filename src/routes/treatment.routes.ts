import { Router } from "express";
import { createTreatments, getMyTreatments } from "../controllers/treatments.controller";

import { authenticate } from "../middlewares/middleware";

const router = Router();

/**
 * @openapi
 * /api/treatment/new:
 *   post:
 *     tags:
 *       - Treatment
 *     summary: Create a treatment for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - medication_id
 *               - dosage
 *               - frequency
 *               - start_date
 *             properties:
 *               medication_id:
 *                 type: integer
 *               dosage:
 *                 type: string
 *               frequency:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *                 nullable: true
 *               status:
 *                 type: string
 *                 enum: [ACTIVE, COMPLETED, PAUSED, CANCELLED]
 *     responses:
 *       201:
 *         description: Treatment created
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post("/new", authenticate, createTreatments);

/**
 * @openapi
 * /api/treatment/me:
 *   get:
 *     tags:
 *       - Treatment
 *     summary: Get treatments for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User treatments
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/me", authenticate, getMyTreatments);

export default router;
