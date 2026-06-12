import { promises as fs } from "fs";
import path from "path";
import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middlewares/middleware";
import { resolveCareTargetUserId } from "../middlewares/care-context";
import {
  CreateDocumentInput,
  DocumentListResponse,
  UpdateDocumentInput,
} from "../models/document.model";

const STORAGE_ROOT = path.resolve(process.cwd(), "storage", "documents");
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const SHARE_LINK_EXPIRES_IN = "15m";

const ALLOWED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"];

type DocumentSharePayload = JwtPayload & {
  documentId?: number;
  purpose?: string;
};

const sanitizeFileName = (fileName: string): string =>
  path.basename(fileName).replace(/[^a-zA-Z0-9._-]/g, "_");

const isAllowedFile = (fileName: string): boolean => {
  const ext = path.extname(fileName).toLowerCase();
  return ALLOWED_EXTENSIONS.includes(ext);
};

const ensureUserDir = async (userId: number): Promise<string> => {
  const userDir = path.join(STORAGE_ROOT, String(userId));
  await fs.mkdir(userDir, { recursive: true });
  return userDir;
};

const parseBase64Payload = (value: string): Buffer | null => {
  if (typeof value !== "string" || value.trim().length === 0) return null;

  const cleaned = value.includes(",") ? value.split(",").pop() ?? "" : value;
  const buffer = Buffer.from(cleaned, "base64");

  return buffer.length > 0 ? buffer : null;
};

const toAbsolutePath = (storedPath: string): string =>
  path.resolve(process.cwd(), storedPath);

const toPublicPath = (storedPath: string): string =>
  storedPath.replace(/\\/g, "/");

const buildDownloadUrl = (id: number): string =>
  `/api/documents/${id}/download`;

const getJwtSecret = (): string | null => process.env.JWT_SECRET ?? null;

const getPublicBaseUrl = (req: Request): string => {
  const configured = process.env.PUBLIC_API_URL ?? process.env.API_PUBLIC_URL;
  if (configured && configured.trim()) {
    return configured.trim().replace(/\/$/, "");
  }

  return `${req.protocol}://${req.get("host")}`;
};

const buildPublicDocumentUrl = (req: Request, token: string): string =>
  `${getPublicBaseUrl(req)}/api/documents/public/${token}`;

const contentTypeFromFilePath = (filePath: string): string => {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".pdf":
      return "application/pdf";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    default:
      return "application/octet-stream";
  }
};

const saveDocumentFile = async ({
  userId,
  fileName,
  contentBase64,
}: {
  userId: number;
  fileName: string;
  contentBase64: string;
}): Promise<string> => {
  if (!isAllowedFile(fileName)) {
    throw new Error("INVALID_FILE_TYPE");
  }

  const fileBuffer = parseBase64Payload(contentBase64);

  if (!fileBuffer) {
    throw new Error("INVALID_BASE64");
  }

  if (fileBuffer.length > MAX_FILE_SIZE) {
    throw new Error("FILE_TOO_LARGE");
  }

  const userDir = await ensureUserDir(userId);
  const safeName = sanitizeFileName(fileName);
  const finalName = `${Date.now()}_${safeName}`;
  const fullPath = path.join(userDir, finalName);

  await fs.writeFile(fullPath, fileBuffer);

  return toPublicPath(path.relative(process.cwd(), fullPath));
};

const handleFileError = (error: unknown, res: Response) => {
  if (error instanceof Error) {
    if (error.message === "INVALID_FILE_TYPE") {
      return res.status(400).json({
        message: "Type de fichier non autorisé. Formats acceptés : PDF, JPG, JPEG, PNG",
      });
    }

    if (error.message === "INVALID_BASE64") {
      return res.status(400).json({
        message: "contentBase64 invalide",
      });
    }

    if (error.message === "FILE_TOO_LARGE") {
      return res.status(400).json({
        message: "Fichier trop volumineux. Taille maximale : 10 MB",
      });
    }
  }

  return null;
};

export const getDocuments = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = await resolveCareTargetUserId(req, res, "can_view_documents");
  if (!userId) return;

  try {
    const documents = await prisma.document.findMany({
      where: { user_id: userId },
      orderBy: { created_at: "desc" },
    });

    const response: DocumentListResponse = {
      count: documents.length,
      data: documents,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Erreur chargement documents", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const getDocumentById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = await resolveCareTargetUserId(req, res, "can_view_documents");
  if (!userId) return;

  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Identifiant invalide" });
  }

  try {
    const document = await prisma.document.findFirst({
      where: { id, user_id: userId },
    });

    if (!document) {
      return res.status(404).json({ message: "Document introuvable" });
    }

    return res.status(200).json({
      ...document,
      file_url: buildDownloadUrl(document.id),
    });
  } catch (error) {
    console.error("Erreur récupération document", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const createDocument = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = await resolveCareTargetUserId(req, res, "can_upload_documents");
  if (!userId) return;

  const { name, type, description, fileName, contentBase64 } =
    req.body as CreateDocumentInput;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof type !== "string" ||
    !type.trim() ||
    typeof fileName !== "string" ||
    !fileName.trim() ||
    typeof contentBase64 !== "string" ||
    !contentBase64.trim()
  ) {
    return res.status(400).json({
      message: "name, type, fileName et contentBase64 sont obligatoires",
    });
  }

  try {
    const filePath = await saveDocumentFile({
      userId,
      fileName,
      contentBase64,
    });

    const document = await prisma.document.create({
      data: {
        user_id: userId,
        name: name.trim(),
        type: type.trim(),
        description: description?.trim() || null,
        file_path: filePath,
      },
    });

    return res.status(201).json({
      ...document,
      file_url: buildDownloadUrl(document.id),
    });
  } catch (error) {
    const handled = handleFileError(error, res);
    if (handled) return handled;

    console.error("Erreur création document", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const updateDocument = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = await resolveCareTargetUserId(req, res, "can_upload_documents");
  if (!userId) return;

  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Identifiant invalide" });
  }

  const payload = req.body as UpdateDocumentInput;

  try {
    const existing = await prisma.document.findFirst({
      where: { id, user_id: userId },
    });

    if (!existing) {
      return res.status(404).json({ message: "Document introuvable" });
    }

    let nextFilePath = existing.file_path;

    if (payload.contentBase64 !== undefined || payload.fileName !== undefined) {
      if (
        typeof payload.contentBase64 !== "string" ||
        !payload.contentBase64.trim() ||
        typeof payload.fileName !== "string" ||
        !payload.fileName.trim()
      ) {
        return res.status(400).json({
          message:
            "Pour remplacer le fichier, fileName et contentBase64 sont obligatoires",
        });
      }

      nextFilePath = await saveDocumentFile({
        userId,
        fileName: payload.fileName,
        contentBase64: payload.contentBase64,
      });

      await fs.unlink(toAbsolutePath(existing.file_path)).catch(() => undefined);
    }

    const updated = await prisma.document.update({
      where: { id },
      data: {
        name: payload.name?.trim() || existing.name,
        type: payload.type?.trim() || existing.type,
        description:
          payload.description === undefined
            ? existing.description
            : (payload.description == null ? null : payload.description.trim()) || null,
        file_path: nextFilePath,
      },
    });

    return res.status(200).json({
      ...updated,
      file_url: buildDownloadUrl(updated.id),
    });
  } catch (error) {
    const handled = handleFileError(error, res);
    if (handled) return handled;

    console.error("Erreur modification document", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const deleteDocument = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = await resolveCareTargetUserId(req, res, "can_upload_documents");
  if (!userId) return;

  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Identifiant invalide" });
  }

  try {
    const existing = await prisma.document.findFirst({
      where: { id, user_id: userId },
    });

    if (!existing) {
      return res.status(404).json({ message: "Document introuvable" });
    }

    await prisma.document.delete({ where: { id } });

    await fs.unlink(toAbsolutePath(existing.file_path)).catch(() => undefined);

    return res.status(204).send();
  } catch (error) {
    console.error("Erreur suppression document", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const downloadDocument = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = await resolveCareTargetUserId(req, res, "can_view_documents");
  if (!userId) return;

  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Identifiant invalide" });
  }

  try {
    const document = await prisma.document.findFirst({
      where: { id, user_id: userId },
    });

    if (!document) {
      return res.status(404).json({ message: "Document introuvable" });
    }

    const absolutePath = toAbsolutePath(document.file_path);

    await fs.access(absolutePath);

    return res.download(absolutePath, path.basename(document.file_path));
  } catch (error) {
    console.error("Erreur téléchargement document", error);
    return res.status(404).json({ message: "Fichier introuvable" });
  }
};

export const createDocumentShareLink = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const userId = await resolveCareTargetUserId(req, res, "can_view_documents");
  if (!userId) return;

  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Identifiant invalide" });
  }

  const secret = getJwtSecret();
  if (!secret) {
    return res.status(500).json({ message: "JWT_SECRET non configuré" });
  }

  try {
    const document = await prisma.document.findFirst({
      where: { id, user_id: userId },
      select: { id: true },
    });

    if (!document) {
      return res.status(404).json({ message: "Document introuvable" });
    }

    const token = jwt.sign(
      {
        documentId: document.id,
        purpose: "document_public_share",
      },
      secret,
      { expiresIn: SHARE_LINK_EXPIRES_IN }
    );

    return res.status(201).json({
      share_url: buildPublicDocumentUrl(req, token),
      expires_in: SHARE_LINK_EXPIRES_IN,
    });
  } catch (error) {
    console.error("Erreur création lien partage document", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const downloadSharedDocument = async (
  req: Request,
  res: Response
) => {
  const token = req.params.token;
  const secret = getJwtSecret();

  if (!token || !secret) {
    return res.status(400).json({ message: "Lien de partage invalide" });
  }

  try {
    const decoded = jwt.verify(token, secret) as DocumentSharePayload;

    if (
      decoded.purpose !== "document_public_share" ||
      !Number.isInteger(decoded.documentId)
    ) {
      return res.status(400).json({ message: "Lien de partage invalide" });
    }

    const document = await prisma.document.findUnique({
      where: { id: decoded.documentId },
    });

    if (!document) {
      return res.status(404).json({ message: "Document introuvable" });
    }

    const absolutePath = toAbsolutePath(document.file_path);

    await fs.access(absolutePath);

    res.setHeader("Content-Type", contentTypeFromFilePath(document.file_path));
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${path.basename(document.file_path)}"`
    );

    return res.sendFile(absolutePath);
  } catch (error) {
    console.error("Erreur téléchargement lien partage document", error);
    return res.status(404).json({ message: "Lien expiré ou document introuvable" });
  }
};
