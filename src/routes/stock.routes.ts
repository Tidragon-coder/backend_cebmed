import { Router } from "express";
import {
  addToStock,
  createStock,
  deleteStock,
  getStockById,
  getMyStock,
  removeFromStock,
  updateStock,
} from "../controllers/stock.controller";
import { authenticate } from "../middlewares/middleware";

const router = Router();

/**
 * @openapi
 * /api/stock/new:
 *   post:
 *     tags:
 *       - Stock
 *     summary: Create a stock entry for the authenticated user
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
 *               - quantity
 *               - location
 *             properties:
 *               medication_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *                 minimum: 0
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Stock created
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Medication not found
 *       500:
 *         description: Internal server error
 */
router.post("/new", authenticate, createStock);

/**
 * @openapi
 * /api/stock/me:
 *   get:
 *     tags:
 *       - Stock
 *     summary: Get stock entries for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 50
 *         description: Max results to return
 *     responses:
 *       200:
 *         description: Stock list
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/me", authenticate, getMyStock);

/**
 * @openapi
 * /api/stock/{id}:
 *   get:
 *     tags:
 *       - Stock
 *     summary: Get one stock entry owned by the authenticated user
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
 *         description: Stock detail
 *       400:
 *         description: Invalid stock id
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Stock not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", authenticate, getStockById);

/**
 * @openapi
 * /api/stock/{id}/add:
 *   patch:
 *     tags:
 *       - Stock
 *     summary: Add an amount to a stock entry owned by the authenticated user
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
 *             required:
 *               - amount
 *             properties:
 *               amount:
 *                 type: integer
 *                 minimum: 1
 *     responses:
 *       200:
 *         description: Stock increased
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Stock not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id/add", authenticate, addToStock);

/**
 * @openapi
 * /api/stock/{id}/remove:
 *   patch:
 *     tags:
 *       - Stock
 *     summary: Remove an amount from a stock entry owned by the authenticated user
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
 *             required:
 *               - amount
 *             properties:
 *               amount:
 *                 type: integer
 *                 minimum: 1
 *     responses:
 *       200:
 *         description: Stock decreased
 *       400:
 *         description: Invalid input or insufficient quantity
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Stock not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id/remove", authenticate, removeFromStock);

/**
 * @openapi
 * /api/stock/{id}:
 *   patch:
 *     tags:
 *       - Stock
 *     summary: Update quantity and/or location for a stock entry owned by the authenticated user
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
 *               quantity:
 *                 type: integer
 *                 minimum: 0
 *               location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Stock updated
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Stock not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", authenticate, updateStock);

/**
 * @openapi
 * /api/stock/{id}:
 *   delete:
 *     tags:
 *       - Stock
 *     summary: Delete a stock entry owned by the authenticated user
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
 *         description: Stock deleted
 *       400:
 *         description: Invalid stock id
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Stock not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", authenticate, deleteStock);

export default router;
