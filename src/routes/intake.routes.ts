import { Router } from "express";
import {
  cancelIntake,
  createIntake,
  deleteIntake,
  getIntakeById,
  getIntakesByTreatment,
  updateIntake,
  validateIntake,
} from "../controllers/intake.controller";
import { authenticate } from "../middlewares/middleware";

const router = Router();

/**
 * @openapi
 * /api/intake/new:
 *   post:
 *     tags:
 *       - Intake
 *     summary: Create a scheduled intake for a treatment owned by the authenticated user
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - treatment_id
 *               - scheduled_at
 *             properties:
 *               treatment_id:
 *                 type: integer
 *               scheduled_at:
 *                 type: string
 *                 format: date-time
 *               note:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Intake created
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Treatment not found
 *       500:
 *         description: Internal server error
 */
router.post("/new", authenticate, createIntake);

/**
 * @openapi
 * /api/intake/{id}:
 *   get:
 *     tags:
 *       - Intake
 *     summary: Get one intake owned by the authenticated user (via treatment ownership)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Intake detail
 *       400:
 *         description: Invalid intake id
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Intake not found
 *       500:
 *         description: Internal server error
 */
/**
 * @openapi
 * /api/intake/treatment/{treatmentId}:
 *   get:
 *     tags:
 *       - Intake
 *     summary: Get intakes for one treatment owned by the authenticated user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: treatmentId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 200
 *           default: 100
 *     responses:
 *       200:
 *         description: Intake list for treatment
 *       400:
 *         description: Invalid treatment id
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Treatment not found
 *       500:
 *         description: Internal server error
 */
router.get("/treatment/:treatmentId", authenticate, getIntakesByTreatment);

router.get("/:id", authenticate, getIntakeById);

/**
 * @openapi
 * /api/intake/{id}:
 *   patch:
 *     tags:
 *       - Intake
 *     summary: Update an intake (scheduled_at, note, status)
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
 *             properties:
 *               scheduled_at:
 *                 type: string
 *                 format: date-time
 *               note:
 *                 type: string
 *                 nullable: true
 *               status:
 *                 type: string
 *                 enum: [PENDING, TAKEN, MISSED]
 *     responses:
 *       200:
 *         description: Intake updated
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Intake not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", authenticate, updateIntake);

/**
 * @openapi
 * /api/intake/{id}:
 *   delete:
 *     tags:
 *       - Intake
 *     summary: Delete one intake owned by the authenticated user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Intake deleted
 *       400:
 *         description: Invalid intake id
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Intake not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", authenticate, deleteIntake);

/**
 * @openapi
 * /api/intake/{id}/validate:
 *   patch:
 *     tags:
 *       - Intake
 *     summary: Mark an intake as taken for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Intake validated
 *       400:
 *         description: Invalid intake id
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Intake not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id/validate", authenticate, validateIntake);

/**
 * @openapi
 * /api/intake/{id}/cancel:
 *   patch:
 *     tags:
 *       - Intake
 *     summary: Cancel intake validation and set it back to pending
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Intake validation canceled
 *       400:
 *         description: Invalid intake id
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Intake not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id/cancel", authenticate, cancelIntake);

export default router;
