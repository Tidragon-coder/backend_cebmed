import { Router } from "express";

import {
  createDocument,
  deleteDocument,
  downloadDocument,
  getDocumentById,
  getDocuments,
  updateDocument,
} from "../controllers/document.controller";
import { authenticate } from "../middlewares/middleware";

const router = Router();

/**
 * @openapi
 * /api/documents:
 *   get:
 *     tags:
 *       - Documents
 *     summary: List user documents
 *     security:
 *       - bearerAuth: []
 */
router.get("/", authenticate, getDocuments);

/**
 * @openapi
 * /api/documents/{id}:
 *   get:
 *     tags:
 *       - Documents
 *     summary: Get document metadata
 *     security:
 *       - bearerAuth: []
 */
router.get("/:id", authenticate, getDocumentById);

/**
 * @openapi
 * /api/documents:
 *   post:
 *     tags:
 *       - Documents
 *     summary: Create a document
 *     security:
 *       - bearerAuth: []
 */
router.post("/", authenticate, createDocument);

/**
 * @openapi
 * /api/documents/{id}:
 *   put:
 *     tags:
 *       - Documents
 *     summary: Update document
 *     security:
 *       - bearerAuth: []
 */
router.put("/:id", authenticate, updateDocument);

/**
 * @openapi
 * /api/documents/{id}:
 *   delete:
 *     tags:
 *       - Documents
 *     summary: Delete document
 *     security:
 *       - bearerAuth: []
 */
router.delete("/:id", authenticate, deleteDocument);

/**
 * @openapi
 * /api/documents/{id}/download:
 *   get:
 *     tags:
 *       - Documents
 *     summary: Download document
 *     security:
 *       - bearerAuth: []
 */
router.get("/:id/download", authenticate, downloadDocument);

export default router;