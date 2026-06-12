import { Response } from "express";

import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "./middleware";

export type CarePermissionKey =
  | "can_view_agenda"
  | "can_edit_agenda"
  | "can_view_documents"
  | "can_upload_documents"
  | "can_view_stock"
  | "can_edit_stock"
  | "can_view_profile";

const parsePatientIdFromRequest = (
  req: AuthenticatedRequest
): number | null | "invalid" => {
  const headerValue = req.header("x-patient-id");
  const queryValue = req.query?.patient_id;

  const raw =
    typeof headerValue === "string" && headerValue.trim().length > 0
      ? headerValue
      : typeof queryValue === "string" && queryValue.trim().length > 0
      ? queryValue
      : null;

  if (raw == null) return null;

  const parsed = Number(raw);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return "invalid";
  }

  return parsed;
};

export const resolveCareTargetUserId = async (
  req: AuthenticatedRequest,
  res: Response,
  permission?: CarePermissionKey
): Promise<number | null> => {
  const actorId = req.user?.id;
  if (!actorId) {
    res.status(401).json({ message: "Utilisateur non authentifié" });
    return null;
  }

  const requestedPatientId = parsePatientIdFromRequest(req);
  if (requestedPatientId === "invalid") {
    res.status(400).json({ message: "x-patient-id invalide" });
    return null;
  }

  if (requestedPatientId == null || requestedPatientId === actorId) {
    return actorId;
  }

  const relation = await prisma.userCaregiver.findFirst({
    where: {
      user_id: requestedPatientId,
      caregiver_id: actorId,
      status: "ACCEPTED",
    },
    select: {
      id: true,
      can_view_agenda: true,
      can_edit_agenda: true,
      can_view_documents: true,
      can_upload_documents: true,
      can_view_stock: true,
      can_edit_stock: true,
      can_view_profile: true,
    },
  });

  if (!relation) {
    res.status(403).json({ message: "Accès patient non autorisé" });
    return null;
  }

  if (permission && relation[permission] !== true) {
    res.status(403).json({ message: "Permission refusee par le patient" });
    return null;
  }

  return requestedPatientId;
};
