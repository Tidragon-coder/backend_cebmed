import { Router } from "express";
import {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointment.controller";


import { authenticate } from "../middlewares/middleware";

const router = Router();

/**
 * @openapi
 * /api/appointments:
 *   get:
 *     tags:
 *       - Appointments
 *     summary: Get user appointments
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of appointments
 */
router.get("/", authenticate, getAppointments);

/**
 * @openapi
 * /api/appointments:
 *   post:
 *     tags:
 *       - Appointments
 *     summary: Create appointment
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Appointment created
 */
router.post("/", authenticate, createAppointment);

/**
 * @openapi
 * /api/appointments/{id}:
 *   put:
 *     tags:
 *       - Appointments
 *     summary: Update appointment
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
 *         description: Appointment updated
 */
router.put("/:id", authenticate, updateAppointment);

/**
 * @openapi
 * /api/appointments/{id}:
 *   delete:
 *     tags:
 *       - Appointments
 *     summary: Delete appointment
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Appointment deleted
 */
router.delete("/:id", authenticate, deleteAppointment);

export default router;