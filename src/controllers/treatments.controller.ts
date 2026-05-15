import { Response } from "express";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middlewares/middleware";

const isValidDate = (value: string): boolean => {
    const date = new Date(value);
    return !Number.isNaN(date.getTime());
};

export const createTreatments = async (req: AuthenticatedRequest, res: Response) => {
    const userIdFromToken = req.user?.id;
    const { medication_id, dosage, frequency, start_date, end_date, status } = req.body;

    if (!userIdFromToken) {
        return res.status(401).json({ message: "Utilisateur non authentifie" });
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

    try {
        const createdTreatment = await prisma.treatment.create({
            data: {
                user_id: userIdFromToken,
                medication_id,
                dosage,
                frequency,
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
        return res.status(401).json({ message: "Utilisateur non authentifie" });
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

// exemple :
//   {
//     "user_id": "uuid-user-id",
//     "medication_id": 42,
//     "dosage": "500 mg",
//     "frequency": "2 fois par jour",
//     "start_date": "2026-05-07",
//     "end_date": "2026-05-21",
//     "status": "ACTIVE"
//   }
