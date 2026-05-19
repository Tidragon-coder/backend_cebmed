import { Response } from "express";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middlewares/middleware";

const parseId = (value: string): number | null => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) return null;
  return parsed;
};

const isValidTime = (value: string): boolean => /^\d{2}:\d{2}$/.test(value);

function generateIntakeDates(
  startDate: Date,
  endDate: Date,
  daysOfWeek: number[],
  timeOfDay: string
): Date[] {
  const [hours, minutes] = timeOfDay.split(":").map(Number);
  const dates: Date[] = [];

  const current = new Date(startDate);
  current.setHours(0, 0, 0, 0);

  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);

  while (current <= end) {
    if (daysOfWeek.includes(current.getDay())) {
      const scheduledAt = new Date(current);
      scheduledAt.setHours(hours, minutes, 0, 0);
      dates.push(scheduledAt);
    }
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

export const createSchedule = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const treatmentId = parseId(req.params.id);
  const { time_of_day, quantity } = req.body;

  if (!userIdFromToken) return res.status(401).json({ message: "Utilisateur non authentifie" });
  if (!treatmentId) return res.status(400).json({ message: "Invalid treatment id" });
  if (time_of_day === undefined || quantity === undefined)
    return res.status(400).json({ message: "Missing required fields: time_of_day, quantity" });
  if (!isValidTime(time_of_day))
    return res.status(400).json({ message: "Invalid time_of_day format, expected HH:MM" });
  if (typeof quantity !== "number" || quantity <= 0)
    return res.status(400).json({ message: "Invalid quantity" });

  try {
    const treatment = await prisma.treatment.findFirst({
      where: { id: treatmentId, user_id: userIdFromToken },
      select: { id: true, start_date: true, end_date: true, days_of_week: true },
    });

    if (!treatment) return res.status(404).json({ message: "Treatment not found" });

    if (treatment.days_of_week.length === 0)
      return res.status(400).json({ message: "Treatment has no days_of_week configured" });

    const schedule = await prisma.treatmentSchedule.create({
      data: { treatment_id: treatmentId, time_of_day, quantity },
      select: {
        id: true,
        treatment_id: true,
        time_of_day: true,
        quantity: true,
        created_at: true,
        updated_at: true,
      },
    });

    const endDate = treatment.end_date ?? (() => {
      const d = new Date(treatment.start_date);
      d.setMonth(d.getMonth() + 6);
      return d;
    })();

    const intakeDates = generateIntakeDates(
      treatment.start_date,
      endDate,
      treatment.days_of_week,
      time_of_day
    );

    if (intakeDates.length > 0) {
      await prisma.intake.createMany({
        data: intakeDates.map((scheduledAt) => ({
          treatment_id: treatmentId,
          schedule_id: schedule.id,
          scheduled_at: scheduledAt,
          status: "PENDING" as const,
        })),
      });
    }

    return res.status(201).json({
      message: "Schedule created successfully",
      data: schedule,
      intakes_generated: intakeDates.length,
    });
  } catch (error) {
    console.error("Create schedule error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getSchedulesByTreatment = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const treatmentId = parseId(req.params.id);

  if (!userIdFromToken) return res.status(401).json({ message: "Utilisateur non authentifie" });
  if (!treatmentId) return res.status(400).json({ message: "Invalid treatment id" });

  try {
    const treatment = await prisma.treatment.findFirst({
      where: { id: treatmentId, user_id: userIdFromToken },
      select: { id: true },
    });

    if (!treatment) return res.status(404).json({ message: "Treatment not found" });

    const schedules = await prisma.treatmentSchedule.findMany({
      where: { treatment_id: treatmentId },
      select: {
        id: true,
        treatment_id: true,
        time_of_day: true,
        quantity: true,
        created_at: true,
        updated_at: true,
      },
      orderBy: { time_of_day: "asc" },
    });

    return res.status(200).json({ count: schedules.length, data: schedules });
  } catch (error) {
    console.error("Get schedules error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteSchedule = async (req: AuthenticatedRequest, res: Response) => {
  const userIdFromToken = req.user?.id;
  const treatmentId = parseId(req.params.id);
  const scheduleId = parseId(req.params.scheduleId);

  if (!userIdFromToken) return res.status(401).json({ message: "Utilisateur non authentifie" });
  if (!treatmentId || !scheduleId) return res.status(400).json({ message: "Invalid id" });

  try {
    const schedule = await prisma.treatmentSchedule.findFirst({
      where: {
        id: scheduleId,
        treatment: { id: treatmentId, user_id: userIdFromToken },
      },
      select: { id: true },
    });

    if (!schedule) return res.status(404).json({ message: "Schedule not found" });

    await prisma.intake.deleteMany({
      where: {
        schedule_id: scheduleId,
        status: "PENDING",
        scheduled_at: { gte: new Date() },
      },
    });

    await prisma.treatmentSchedule.delete({ where: { id: scheduleId } });

    return res.status(200).json({ message: "Schedule deleted successfully" });
  } catch (error) {
    console.error("Delete schedule error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
