import { Request, Response } from "express";
import { prisma as defaultPrisma } from "../lib/prisma";

export const getMedicationsByName = async (req: Request, res: Response, db = defaultPrisma) => {
    const name = req.query.name;
    const limit = req.query.limit;

    if (typeof name !== "string" || name.trim().length < 3) {
        return res.status(400).json({
            message: "Invalid name: at least 3 characters are required",
        });
    }

    const parsedLimit = Number(limit);
    const take =
        Number.isFinite(parsedLimit) && parsedLimit > 0
            ? Math.min(Math.floor(parsedLimit), 100)
            : 20;

    try {
        const medications = await db.medication.findMany({
            where: {
                name: {
                    contains: name.trim(),
                    mode: "insensitive",
                },
            },
            select: {
                id: true,
                cisCode: true,
                name: true,
                pharmaceuticalForm: true,
                administrationRoutes: true,
                marketingStatus: true,
                holder: true,
            },
            orderBy: {
                name: "asc",
            },
            take,
        });

        return res.status(200).json({
            count: medications.length,
            data: medications,
        });
    } catch (error) {
        console.error("Medication search error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
