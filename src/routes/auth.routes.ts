import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { login } from "../controllers/auth.controller";
import { me } from "../controllers/auth.controller";
import { updateMe } from "../controllers/auth.controller";
import { updateMyPassword } from "../controllers/auth.controller";
import { deleteMe } from "../controllers/auth.controller";

import { authenticate } from "../middlewares/middleware";

const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - last_name
 *               - date_of_birth
 *               - email
 *               - password
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *                 nullable: true
 *               password:
 *                 type: string
 *                 minLength: 8
 *               picture:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.post("/register", register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login success
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post("/login", login);

/**
 * @openapi
 * /api/auth/me:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Get current authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user info
 *       401:
 *         description: Missing token
 *       403:
 *         description: Invalid or expired token
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/me", authenticate, me);

/**
 * @openapi
 * /api/auth/me:
 *   patch:
 *     tags:
 *       - Auth
 *     summary: Update current authenticated user profile
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *                 nullable: true
 *               picture:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Profile updated
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Missing token
 *       403:
 *         description: Invalid or expired token
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.patch("/me", authenticate, updateMe);

/**
 * @openapi
 * /api/auth/me/password:
 *   patch:
 *     tags:
 *       - Auth
 *     summary: Change current authenticated user password
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - current_password
 *               - new_password
 *             properties:
 *               current_password:
 *                 type: string
 *               new_password:
 *                 type: string
 *                 minLength: 8
 *     responses:
 *       200:
 *         description: Password updated
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Missing token or wrong current password
 *       403:
 *         description: Invalid or expired token
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.patch("/me/password", authenticate, updateMyPassword);

/**
 * @openapi
 * /api/auth/me:
 *   delete:
 *     tags:
 *       - Auth
 *     summary: Delete current authenticated user account with password confirmation
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *             properties:
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Account deleted
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Missing token or wrong password
 *       403:
 *         description: Invalid or expired token
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete("/me", authenticate, deleteMe);

export default router;
