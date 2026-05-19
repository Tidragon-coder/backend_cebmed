import { Router } from "express";
import { createTreatments, getMyTreatments, deleteTreatment } from "../controllers/treatments.controller";
import scheduleRoutes from "./treatmentSchedule.routes";
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
 *               days_of_week:
 *                 type: array
 *                 items:
 *                   type: integer
 *                   minimum: 0
 *                   maximum: 6
 *                 example: [1, 3, 5]
 *                 description: "Days of week (0=Sun, 1=Mon, ..., 6=Sat)"
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

/**
 * @openapi
 * /api/treatment/{id}:
 *   delete:
 *     tags:
 *       - Treatment
 *     summary: Delete a treatment and all its schedules and intakes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Treatment ID
 *     responses:
 *       200:
 *         description: Treatment deleted
 *       400:
 *         description: Invalid id
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Treatment not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", authenticate, deleteTreatment);

router.use("/:id/schedules", scheduleRoutes);

export default router;
