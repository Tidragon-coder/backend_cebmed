import { Router } from "express";
import {
  createSchedule,
  getSchedulesByTreatment,
  deleteSchedule,
} from "../controllers/treatmentSchedule.controller";
import { authenticate } from "../middlewares/middleware";

const router = Router({ mergeParams: true });

/**
 * @openapi
 * /api/treatment/{id}/schedules:
 *   post:
 *     tags:
 *       - TreatmentSchedule
 *     summary: Create a schedule slot for a treatment and auto-generate intakes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Treatment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - time_of_day
 *               - quantity
 *             properties:
 *               time_of_day:
 *                 type: string
 *                 example: "08:00"
 *                 description: Time in HH:MM format
 *               quantity:
 *                 type: number
 *                 example: 1.5
 *                 description: Number of units per intake
 *     responses:
 *       201:
 *         description: Schedule created and intakes generated
 *       400:
 *         description: Invalid input or treatment has no days_of_week
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Treatment not found
 *       500:
 *         description: Internal server error
 */
router.post("/", authenticate, createSchedule);

/**
 * @openapi
 * /api/treatment/{id}/schedules:
 *   get:
 *     tags:
 *       - TreatmentSchedule
 *     summary: Get all schedule slots for a treatment
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
 *         description: List of schedule slots
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Treatment not found
 *       500:
 *         description: Internal server error
 */
router.get("/", authenticate, getSchedulesByTreatment);

/**
 * @openapi
 * /api/treatment/{id}/schedules/{scheduleId}:
 *   delete:
 *     tags:
 *       - TreatmentSchedule
 *     summary: Delete a schedule slot and its future pending intakes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Treatment ID
 *       - in: path
 *         name: scheduleId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Schedule ID
 *     responses:
 *       200:
 *         description: Schedule deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Schedule not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:scheduleId", authenticate, deleteSchedule);

export default router;
