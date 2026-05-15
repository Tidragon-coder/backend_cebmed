import { Router } from "express";
import { getMedicationsByName } from "../controllers/medication.controller";

import { authenticate } from "../middlewares/middleware";

const router = Router();

/**
 * @openapi
 * /api/medication/nameSearch:
 *   get:
 *     tags:
 *       - Medication
 *     summary: Search medications by name
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *           minLength: 3
 *         description: Medication name (minimum 3 characters)
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 20
 *         description: Max results to return
 *     responses:
 *       200:
 *         description: Medication list
 *       400:
 *         description: Invalid query parameters
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/nameSearch", authenticate, getMedicationsByName);

export default router;
