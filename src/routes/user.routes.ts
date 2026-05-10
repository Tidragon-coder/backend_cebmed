import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const router = Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/", getUsers);

export default router;
