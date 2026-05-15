import { Router } from "express";
import { addNewsletterMail } from "../controllers/newsletter.controller";

const router = Router();

/**
 * @openapi
 * /api/newsletter/new:
 *   post:
 *     tags:
 *       - Newsletter
 *     summary: Subscribe an email to the newsletter
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - accept_conditions
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               accept_conditions:
 *                 type: boolean
 *                 enum: [true]
 *     responses:
 *       201:
 *         description: Subscription created
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.post("/new", addNewsletterMail);

export default router;
