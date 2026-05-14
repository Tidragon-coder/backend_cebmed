import { Response } from "express";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middlewares/middleware";
import {
  AppointmentListResponse,
  CreateAppointmentInput,
  UpdateAppointmentInput,
} from "../models/appointment.model";

const normalizeConsultationType = (
  value?: string
): "PRESENTIAL" | "VIDEO" | "PHONE" | null => {
  if (value === undefined) {
    return null;
  }

  const normalized = value.trim().toUpperCase();

  if (!["PRESENTIAL", "VIDEO", "PHONE"].includes(normalized)) {
    return null;
  }

  return normalized as "PRESENTIAL" | "VIDEO" | "PHONE";
};

export const getAppointments = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  if (!req.user?.id) {
    return res.status(401).json({
      message: "Utilisateur non authentifié",
    });
  }

  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        user_id: req.user.id,
      },
      orderBy: {
        start_time: "asc",
      },
    });

    const response: AppointmentListResponse = {
      count: appointments.length,
      data: appointments,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Erreur chargement rendez-vous", error);

    return res.status(500).json({
      message: "Erreur interne du serveur",
    });
  }
};

export const createAppointment = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  if (!req.user?.id) {
    return res.status(401).json({
      message: "Utilisateur non authentifié",
    });
  }

  const {
    title,
    description,
    location,
    start_time,
    end_time,
    notificationsEnabled,
    consultationType,
    reminderDelay,
  } = req.body as CreateAppointmentInput;

  if (
    typeof title !== "string" ||
    !title.trim() ||
    !start_time ||
    !end_time
  ) {
    return res.status(400).json({
      message:
        "Le titre, l'heure de début et l'heure de fin sont obligatoires",
    });
  }

  const parsedStart = new Date(start_time);
  const parsedEnd = new Date(end_time);

  if (
    Number.isNaN(parsedStart.getTime()) ||
    Number.isNaN(parsedEnd.getTime())
  ) {
    return res.status(400).json({
      message: "Dates invalides",
    });
  }

  if (parsedStart >= parsedEnd) {
    return res.status(400).json({
      message: "La date de fin doit être après la date de début",
    });
  }

  const parsedReminderDelay =
    reminderDelay === undefined || reminderDelay === null
      ? null
      : Number(reminderDelay);

  if (
    parsedReminderDelay !== null &&
    (!Number.isInteger(parsedReminderDelay) || parsedReminderDelay < 0)
  ) {
    return res.status(400).json({
      message: "reminderDelay doit être un entier positif",
    });
  }

  if (
    notificationsEnabled !== undefined &&
    typeof notificationsEnabled !== "boolean"
  ) {
    return res.status(400).json({
      message: "notificationsEnabled doit être un booléen",
    });
  }

  const normalizedConsultationType = normalizeConsultationType(consultationType);

  if (consultationType !== undefined && normalizedConsultationType === null) {
    return res.status(400).json({
      message: "consultationType doit être PRESENTIAL, VIDEO ou PHONE",
    });
  }

  try {
    const appointment = await prisma.appointment.create({
      data: {
        user_id: req.user.id,
        title: title.trim(),
        description: description ?? null,
        location: location ?? null,
        start_time: parsedStart,
        end_time: parsedEnd,
        notifications_enabled: notificationsEnabled ?? false,
        consultation_type: normalizedConsultationType,
        reminder_delay: parsedReminderDelay,
      },
    });

    return res.status(201).json(appointment);
  } catch (error) {
    console.error("Erreur création rendez-vous", error);

    return res.status(500).json({
      message: "Erreur interne du serveur",
    });
  }
};

export const updateAppointment = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  if (!req.user?.id) {
    return res.status(401).json({
      message: "Utilisateur non authentifié",
    });
  }

  const id = Number(req.params.id);
  const payload = req.body as UpdateAppointmentInput;

  if (!Number.isFinite(id)) {
    return res.status(400).json({
      message: "Identifiant du rendez-vous invalide",
    });
  }

  const parsedReminderDelay =
    payload.reminderDelay === undefined || payload.reminderDelay === null
      ? undefined
      : Number(payload.reminderDelay);

  if (
    parsedReminderDelay !== undefined &&
    (!Number.isInteger(parsedReminderDelay) || parsedReminderDelay < 0)
  ) {
    return res.status(400).json({
      message: "reminderDelay doit être un entier positif",
    });
  }

  if (
    payload.notificationsEnabled !== undefined &&
    typeof payload.notificationsEnabled !== "boolean"
  ) {
    return res.status(400).json({
      message: "notificationsEnabled doit être un booléen",
    });
  }

  const normalizedConsultationType =
    payload.consultationType === undefined
      ? undefined
      : normalizeConsultationType(payload.consultationType);

  if (
    payload.consultationType !== undefined &&
    normalizedConsultationType === null
  ) {
    return res.status(400).json({
      message: "consultationType doit être PRESENTIAL, VIDEO ou PHONE",
    });
  }

  const parsedStart = payload.start_time
    ? new Date(payload.start_time)
    : undefined;

  const parsedEnd = payload.end_time
    ? new Date(payload.end_time)
    : undefined;

  if (
    (parsedStart && Number.isNaN(parsedStart.getTime())) ||
    (parsedEnd && Number.isNaN(parsedEnd.getTime()))
  ) {
    return res.status(400).json({
      message: "Dates invalides",
    });
  }

  try {
    const existing = await prisma.appointment.findFirst({
      where: {
        id,
        user_id: req.user.id,
      },
    });

    if (!existing) {
      return res.status(404).json({
        message: "Rendez-vous introuvable",
      });
    }

    const finalStart = parsedStart ?? existing.start_time;
    const finalEnd = parsedEnd ?? existing.end_time;

    if (finalStart >= finalEnd) {
      return res.status(400).json({
        message: "La date de fin doit être après la date de début",
      });
    }

    const updated = await prisma.appointment.update({
      where: {
        id,
      },
      data: {
        title: payload.title?.trim() ?? existing.title,
        description: payload.description ?? existing.description,
        location: payload.location ?? existing.location,
        start_time: finalStart,
        end_time: finalEnd,
        notifications_enabled:
          payload.notificationsEnabled ?? existing.notifications_enabled,
        consultation_type:
          normalizedConsultationType === undefined
            ? existing.consultation_type
            : normalizedConsultationType,
        reminder_delay:
          parsedReminderDelay === undefined
            ? existing.reminder_delay
            : parsedReminderDelay,
      },
    });

    return res.status(200).json(updated);
  } catch (error) {
    console.error("Erreur modification rendez-vous", error);

    return res.status(500).json({
      message: "Erreur interne du serveur",
    });
  }
};

export const deleteAppointment = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  if (!req.user?.id) {
    return res.status(401).json({
      message: "Utilisateur non authentifié",
    });
  }

  const id = Number(req.params.id);

  if (!Number.isFinite(id)) {
    return res.status(400).json({
      message: "Identifiant du rendez-vous invalide",
    });
  }

  try {
    const existing = await prisma.appointment.findFirst({
      where: {
        id,
        user_id: req.user.id,
      },
    });

    if (!existing) {
      return res.status(404).json({
        message: "Rendez-vous introuvable",
      });
    }

    await prisma.appointment.delete({
      where: {
        id,
      },
    });

    return res.status(204).send();
  } catch (error) {
    console.error("Erreur suppression rendez-vous", error);

    return res.status(500).json({
      message: "Erreur interne du serveur",
    });
  }
};