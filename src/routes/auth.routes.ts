import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { login } from "../controllers/auth.controller";
import { me } from "../controllers/auth.controller";

import { authenticate } from "../middlewares/middleware";

const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new user
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/register", register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login user
 *     responses:
 *       200:
 *         description: Login success
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
 *         description: Unauthorized
 */
router.get("/me", authenticate, me);

export default router;
