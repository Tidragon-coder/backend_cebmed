import { Response } from "express";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middlewares/middleware";
import {
  AppointmentListResponse,
  CreateAppointmentInput,
  UpdateAppointmentInput,
} from "../models/appointment.model";

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

  try {
    const appointment = await prisma.appointment.create({
      data: {
        user_id: req.user.id,
        title: title.trim(),
        description,
        location,
        start_time: parsedStart,
        end_time: parsedEnd,
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

    const updated = await prisma.appointment.update({
      where: {
        id,
      },
      data: {
        title: payload.title ?? existing.title,
        description: payload.description ?? existing.description,
        location: payload.location ?? existing.location,
        start_time: payload.start_time
          ? new Date(payload.start_time)
          : existing.start_time,
        end_time: payload.end_time
          ? new Date(payload.end_time)
          : existing.end_time,
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
