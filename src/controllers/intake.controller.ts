import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

type AuthenticatedRequest = Request & {
  user?: {
    id?: number;
  };
};

const isValidDateTime = (value: string): boolean => {
  const date = new Date(value);
  return !Number.isNaN(date.getTime());
};

const parseIntakeId = (value: string): number | null => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
};

const parseTreatmentId = (value: string): number | null => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
};

export const createIntake = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const { treatment_id, scheduled_at, note } = req.body;

  if (!userIdFromToken) {
    return res.status(401).json({ message: "Utilisateur non authentifie" });
  }

  if (treatment_id === undefined || scheduled_at === undefined) {
    return res.status(400).json({ message: "Missing required fields: treatment_id, scheduled_at" });
  }

  if (!Number.isInteger(treatment_id) || treatment_id <= 0) {
    return res.status(400).json({ message: "Invalid treatment_id" });
  }

  if (typeof scheduled_at !== "string" || !isValidDateTime(scheduled_at)) {
    return res.status(400).json({ message: "Invalid scheduled_at" });
  }

  if (note !== undefined && note !== null && typeof note !== "string") {
    return res.status(400).json({ message: "Invalid note" });
  }

  try {
    const treatment = await prisma.treatment.findFirst({
      where: {
        id: treatment_id,
        user_id: userIdFromToken,
      },
      select: { id: true },
    });

    if (!treatment) {
      return res.status(404).json({ message: "Treatment not found" });
    }

    const intake = await prisma.intake.create({
      data: {
        treatment_id,
        scheduled_at: new Date(scheduled_at),
        status: "PENDING",
        note: note ?? null,
      },
      select: {
        id: true,
        treatment_id: true,
        scheduled_at: true,
        taken_at: true,
        status: true,
        note: true,
        created_at: true,
        updated_at: true,
      },
    });

    return res.status(201).json({
      message: "Intake created successfully",
      data: intake,
    });
  } catch (error) {
    console.error("Create intake error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getIntakeById = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const intakeId = parseIntakeId(req.params.id);

  if (!userIdFromToken) {
    return res.status(401).json({ message: "Utilisateur non authentifie" });
  }

  if (!intakeId) {
    return res.status(400).json({ message: "Invalid intake id" });
  }

  try {
    const intake = await prisma.intake.findFirst({
      where: {
        id: intakeId,
        treatment: {
          user_id: userIdFromToken,
        },
      },
      select: {
        id: true,
        scheduled_at: true,
        taken_at: true,
        status: true,
        note: true,
        created_at: true,
        updated_at: true,
        treatment: {
          select: {
            id: true,
            user_id: true,
            dosage: true,
            frequency: true,
            start_date: true,
            end_date: true,
            status: true,
            medication: {
              select: {
                id: true,
                cisCode: true,
                name: true,
                pharmaceuticalForm: true,
                administrationRoutes: true,
                marketingStatus: true,
                holder: true,
              },
            },
          },
        },
      },
    });

    if (!intake) {
      return res.status(404).json({ message: "Intake not found" });
    }

    return res.status(200).json({ data: intake });
  } catch (error) {
    console.error("Get intake by id error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getIntakesByTreatment = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const treatmentId = parseTreatmentId(req.params.treatmentId);
  const { limit } = req.query;

  if (!userIdFromToken) {
    return res.status(401).json({ message: "Utilisateur non authentifie" });
  }

  if (!treatmentId) {
    return res.status(400).json({ message: "Invalid treatment id" });
  }

  const parsedLimit = Number(limit);
  const take =
    Number.isFinite(parsedLimit) && parsedLimit > 0
      ? Math.min(Math.floor(parsedLimit), 200)
      : 100;

  try {
    const treatment = await prisma.treatment.findFirst({
      where: {
        id: treatmentId,
        user_id: userIdFromToken,
      },
      select: {
        id: true,
      },
    });

    if (!treatment) {
      return res.status(404).json({ message: "Treatment not found" });
    }

    const intakes = await prisma.intake.findMany({
      where: {
        treatment_id: treatmentId,
      },
      select: {
        id: true,
        scheduled_at: true,
        taken_at: true,
        status: true,
        note: true,
        created_at: true,
        updated_at: true,
        treatment: {
          select: {
            id: true,
            user_id: true,
            dosage: true,
            frequency: true,
            start_date: true,
            end_date: true,
            status: true,
            medication: {
              select: {
                id: true,
                cisCode: true,
                name: true,
                pharmaceuticalForm: true,
                administrationRoutes: true,
                marketingStatus: true,
                holder: true,
              },
            },
          },
        },
      },
      orderBy: {
        scheduled_at: "asc",
      },
      take,
    });

    return res.status(200).json({
      count: intakes.length,
      data: intakes,
    });
  } catch (error) {
    console.error("Get intakes by treatment error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateIntake = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const intakeId = parseIntakeId(req.params.id);
  const { scheduled_at, note, status } = req.body;

  if (!userIdFromToken) {
    return res.status(401).json({ message: "Utilisateur non authentifie" });
  }

  if (!intakeId) {
    return res.status(400).json({ message: "Invalid intake id" });
  }

  if (scheduled_at === undefined && note === undefined && status === undefined) {
    return res.status(400).json({ message: "No updatable fields provided" });
  }

  if (scheduled_at !== undefined && (typeof scheduled_at !== "string" || !isValidDateTime(scheduled_at))) {
    return res.status(400).json({ message: "Invalid scheduled_at" });
  }

  if (note !== undefined && note !== null && typeof note !== "string") {
    return res.status(400).json({ message: "Invalid note" });
  }

  if (status !== undefined && !["PENDING", "TAKEN", "MISSED"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    const intake = await prisma.intake.findFirst({
      where: {
        id: intakeId,
        treatment: {
          user_id: userIdFromToken,
        },
      },
      select: {
        id: true,
      },
    });

    if (!intake) {
      return res.status(404).json({ message: "Intake not found" });
    }

    const data: {
      scheduled_at?: Date;
      note?: string | null;
      status?: "PENDING" | "TAKEN" | "MISSED";
      taken_at?: Date | null;
    } = {};

    if (scheduled_at !== undefined) {
      data.scheduled_at = new Date(scheduled_at);
    }

    if (note !== undefined) {
      data.note = note;
    }

    if (status !== undefined) {
      data.status = status;
      if (status === "TAKEN") {
        data.taken_at = new Date();
      }
      if (status === "PENDING" || status === "MISSED") {
        data.taken_at = null;
      }
    }

    const updatedIntake = await prisma.intake.update({
      where: { id: intake.id },
      data,
      select: {
        id: true,
        treatment_id: true,
        scheduled_at: true,
        taken_at: true,
        status: true,
        note: true,
        updated_at: true,
      },
    });

    return res.status(200).json({
      message: "Intake updated successfully",
      data: updatedIntake,
    });
  } catch (error) {
    console.error("Update intake error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteIntake = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const intakeId = parseIntakeId(req.params.id);

  if (!userIdFromToken) {
    return res.status(401).json({ message: "Utilisateur non authentifie" });
  }

  if (!intakeId) {
    return res.status(400).json({ message: "Invalid intake id" });
  }

  try {
    const intake = await prisma.intake.findFirst({
      where: {
        id: intakeId,
        treatment: {
          user_id: userIdFromToken,
        },
      },
      select: {
        id: true,
      },
    });

    if (!intake) {
      return res.status(404).json({ message: "Intake not found" });
    }

    await prisma.intake.delete({
      where: { id: intake.id },
      select: { id: true },
    });

    return res.status(200).json({ message: "Intake deleted successfully" });
  } catch (error) {
    console.error("Delete intake error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const validateIntake = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const intakeId = parseIntakeId(req.params.id);

  if (!userIdFromToken) {
    return res.status(401).json({ message: "Utilisateur non authentifie" });
  }

  if (!intakeId) {
    return res.status(400).json({ message: "Invalid intake id" });
  }

  try {
    const intake = await prisma.intake.findFirst({
      where: {
        id: intakeId,
        treatment: {
          user_id: userIdFromToken,
        },
      },
      select: {
        id: true,
        status: true,
      },
    });

    if (!intake) {
      return res.status(404).json({ message: "Intake not found" });
    }

    if (intake.status === "TAKEN") {
      return res.status(400).json({ message: "Intake is already marked as taken" });
    }

    const updatedIntake = await prisma.intake.update({
      where: { id: intake.id },
      data: {
        status: "TAKEN",
        taken_at: new Date(),
      },
      select: {
        id: true,
        treatment_id: true,
        scheduled_at: true,
        taken_at: true,
        status: true,
        note: true,
        updated_at: true,
      },
    });

    return res.status(200).json({
      message: "Intake validated successfully",
      data: updatedIntake,
    });
  } catch (error) {
    console.error("Validate intake error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const cancelIntake = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const intakeId = parseIntakeId(req.params.id);

  if (!userIdFromToken) {
    return res.status(401).json({ message: "Utilisateur non authentifie" });
  }

  if (!intakeId) {
    return res.status(400).json({ message: "Invalid intake id" });
  }

  try {
    const intake = await prisma.intake.findFirst({
      where: {
        id: intakeId,
        treatment: {
          user_id: userIdFromToken,
        },
      },
      select: {
        id: true,
        status: true,
      },
    });

    if (!intake) {
      return res.status(404).json({ message: "Intake not found" });
    }

    if (intake.status !== "TAKEN") {
      return res.status(400).json({ message: "Intake is not marked as taken" });
    }

    const updatedIntake = await prisma.intake.update({
      where: { id: intake.id },
      data: {
        status: "PENDING",
        taken_at: null,
      },
      select: {
        id: true,
        treatment_id: true,
        scheduled_at: true,
        taken_at: true,
        status: true,
        note: true,
        updated_at: true,
      },
    });

    return res.status(200).json({
      message: "Intake validation canceled successfully",
      data: updatedIntake,
    });
  } catch (error) {
    console.error("Cancel intake error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
