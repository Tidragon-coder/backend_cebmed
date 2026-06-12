import { Response } from "express";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middlewares/middleware";

const isValidDate = (value: string): boolean => {
    const date = new Date(value);
    return !Number.isNaN(date.getTime());
};

export const createTreatments = async (req: AuthenticatedRequest, res: Response) => {
    const userIdFromToken = req.user?.id;
    const { medication_id, dosage, frequency, days_of_week, start_date, end_date, status } = req.body;

    if (!userIdFromToken) {
        return res.status(401).json({ message: "Utilisateur non authentifié" });
    }

    if (!medication_id || !dosage || !frequency || !start_date) {
        return res.status(400).json({
            message: "Missing required fields: medication_id, dosage, frequency, start_date",
        });
    }

    if (typeof medication_id !== "number") {
        return res.status(400).json({ message: "Invalid medication_id" });
    }

    if (typeof start_date !== "string" || !isValidDate(start_date)) {
        return res.status(400).json({ message: "Invalid start_date" });
    }

    if (end_date !== undefined && end_date !== null && (typeof end_date !== "string" || !isValidDate(end_date))) {
        return res.status(400).json({ message: "Invalid end_date" });
    }

    if (
        status !== undefined &&
        status !== null &&
        !["ACTIVE", "COMPLETED", "PAUSED", "CANCELLED"].includes(status)
    ) {
        return res.status(400).json({ message: "Invalid status" });
    }

    if (
        days_of_week !== undefined &&
        (!Array.isArray(days_of_week) ||
            days_of_week.some((d: unknown) => !Number.isInteger(d) || (d as number) < 0 || (d as number) > 6))
    ) {
        return res.status(400).json({ message: "Invalid days_of_week: expected array of integers 0-6" });
    }

    try {
        const createdTreatment = await prisma.treatment.create({
            data: {
                user_id: userIdFromToken,
                medication_id,
                dosage,
                frequency,
                days_of_week: days_of_week ?? [],
                start_date: new Date(start_date),
                end_date: end_date ? new Date(end_date) : null,
                status,
            },
            select: {
                id: true,
                user_id: true,
                medication_id: true,
                dosage: true,
                frequency: true,
                days_of_week: true,
                start_date: true,
                end_date: true,
                status: true,
                created_at: true,
                updated_at: true,
            },
        });

        return res.status(201).json({
            message: "Treatment created successfully",
            data: createdTreatment,
        });
    } catch (error) {
        console.error("Create treatment error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getMyTreatments = async (req: AuthenticatedRequest, res: Response) => {
    const userIdFromToken = req.user?.id;

    if (!userIdFromToken) {
        return res.status(401).json({ message: "Utilisateur non authentifié" });
    }

    try {
        const treatments = await prisma.treatment.findMany({
            where: {
                user_id: userIdFromToken,
            },
            select: {
                id: true,
                user_id: true,
                medication_id: true,
                dosage: true,
                frequency: true,
                days_of_week: true,
                start_date: true,
                end_date: true,
                status: true,
                created_at: true,
                updated_at: true,
            },
            orderBy: {
                created_at: "desc",
            },
        });

        return res.status(200).json({
            count: treatments.length,
            data: treatments,
        });
    } catch (error) {
        console.error("Get my treatments error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteTreatment = async (req: AuthenticatedRequest, res: Response) => {
    const userIdFromToken = req.user?.id;
    const treatmentId = Number(req.params.id);

    if (!userIdFromToken) {
        return res.status(401).json({ message: "Utilisateur non authentifié" });
    }

    if (!Number.isInteger(treatmentId) || treatmentId <= 0) {
        return res.status(400).json({ message: "Invalid treatment id" });
    }

    try {
        const treatment = await prisma.treatment.findFirst({
            where: { id: treatmentId, user_id: userIdFromToken },
            select: { id: true },
        });

        if (!treatment) {
            return res.status(404).json({ message: "Treatment not found" });
        }

        await prisma.treatment.delete({ where: { id: treatmentId } });

        return res.status(200).json({ message: "Treatment deleted successfully" });
    } catch (error) {
        console.error("Delete treatment error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
