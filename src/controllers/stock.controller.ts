import { Response } from "express";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middlewares/middleware";
import { resolveCareTargetUserId } from "../middlewares/care-context";

const parseStockId = (value: string): number | null => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
};

const parseAmount = (value: unknown): number | null => {
  if (!Number.isInteger(value) || (value as number) <= 0) {
    return null;
  }
  return value as number;
};

export const createStock = async (req: AuthenticatedRequest, res: Response) => {
  const targetUserId = await resolveCareTargetUserId(req, res, "can_edit_stock");
  if (!targetUserId) return;

  const { medication_id, quantity, location } = req.body;

  if (medication_id === undefined || quantity === undefined || location === undefined) {
    return res.status(400).json({ message: "Missing required fields: medication_id, quantity, location" });
  }

  if (typeof medication_id !== "number") {
    return res.status(400).json({ message: "Invalid medication_id" });
  }

  if (!Number.isInteger(quantity) || quantity < 0) {
    return res.status(400).json({ message: "Invalid quantity: must be an integer >= 0" });
  }

  if (typeof location !== "string" || location.trim().length === 0) {
    return res.status(400).json({ message: "Invalid location" });
  }

  try {
    const medication = await prisma.medication.findUnique({
      where: { id: medication_id },
      select: { id: true },
    });

    if (!medication) {
      return res.status(404).json({ message: "Medication not found" });
    }

    const stock = await prisma.stock.create({
      data: {
        user_id: targetUserId,
        medication_id,
        quantity,
        location: location.trim(),
      },
      select: {
        id: true,
        user_id: true,
        medication_id: true,
        quantity: true,
        location: true,
        created_at: true,
        updated_at: true,
      },
    });

    return res.status(201).json({
      message: "Stock created successfully",
      data: stock,
    });
  } catch (error) {
    console.error("Create stock error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMyStock = async (req: AuthenticatedRequest, res: Response) => {
  const targetUserId = await resolveCareTargetUserId(req, res, "can_view_stock");
  if (!targetUserId) return;

  const { limit } = req.query;

  const parsedLimit = Number(limit);
  const take =
    Number.isFinite(parsedLimit) && parsedLimit > 0
      ? Math.min(Math.floor(parsedLimit), 100)
      : 50;

  try {
    const stocks = await prisma.stock.findMany({
      where: {
        user_id: targetUserId,
      },
      select: {
        id: true,
        user_id: true,
        medication_id: true,
        quantity: true,
        location: true,
        created_at: true,
        updated_at: true,
        medication: {
          select: {
            id: true,
            cisCode: true,
            name: true,
            pharmaceuticalForm: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
      take,
    });

    return res.status(200).json({
      count: stocks.length,
      data: stocks,
    });
  } catch (error) {
    console.error("Get my stock error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getStockById = async (req: AuthenticatedRequest, res: Response) => {
  const targetUserId = await resolveCareTargetUserId(req, res, "can_view_stock");
  if (!targetUserId) return;

  const stockId = parseStockId(req.params.id);

  if (!stockId) {
    return res.status(400).json({ message: "Invalid stock id" });
  }

  try {
    const stock = await prisma.stock.findFirst({
      where: {
        id: stockId,
        user_id: targetUserId,
      },
      select: {
        id: true,
        user_id: true,
        medication_id: true,
        quantity: true,
        location: true,
        created_at: true,
        updated_at: true,
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
    });

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    return res.status(200).json({ data: stock });
  } catch (error) {
    console.error("Get stock by id error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addToStock = async (req: AuthenticatedRequest, res: Response) => {
  const targetUserId = await resolveCareTargetUserId(req, res, "can_edit_stock");
  if (!targetUserId) return;

  const stockId = parseStockId(req.params.id);
  const amount = parseAmount(req.body?.amount);

  if (!stockId) {
    return res.status(400).json({ message: "Invalid stock id" });
  }

  if (!amount) {
    return res.status(400).json({ message: "Invalid amount: must be an integer > 0" });
  }

  try {
    const stock = await prisma.stock.findFirst({
      where: {
        id: stockId,
        user_id: targetUserId,
      },
      select: {
        id: true,
        quantity: true,
      },
    });

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    const updatedStock = await prisma.stock.update({
      where: { id: stock.id },
      data: {
        quantity: stock.quantity + amount,
      },
      select: {
        id: true,
        user_id: true,
        medication_id: true,
        quantity: true,
        location: true,
        updated_at: true,
      },
    });

    return res.status(200).json({
      message: "Stock quantity increased successfully",
      data: updatedStock,
    });
  } catch (error) {
    console.error("Add to stock error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const removeFromStock = async (req: AuthenticatedRequest, res: Response) => {
  const targetUserId = await resolveCareTargetUserId(req, res, "can_edit_stock");
  if (!targetUserId) return;

  const stockId = parseStockId(req.params.id);
  const amount = parseAmount(req.body?.amount);

  if (!stockId) {
    return res.status(400).json({ message: "Invalid stock id" });
  }

  if (!amount) {
    return res.status(400).json({ message: "Invalid amount: must be an integer > 0" });
  }

  try {
    const stock = await prisma.stock.findFirst({
      where: {
        id: stockId,
        user_id: targetUserId,
      },
      select: {
        id: true,
        quantity: true,
      },
    });

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    if (stock.quantity - amount < 0) {
      return res.status(400).json({ message: "Insufficient stock quantity" });
    }

    const updatedStock = await prisma.stock.update({
      where: { id: stock.id },
      data: {
        quantity: stock.quantity - amount,
      },
      select: {
        id: true,
        user_id: true,
        medication_id: true,
        quantity: true,
        location: true,
        updated_at: true,
      },
    });

    return res.status(200).json({
      message: "Stock quantity decreased successfully",
      data: updatedStock,
    });
  } catch (error) {
    console.error("Remove from stock error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateStock = async (req: AuthenticatedRequest, res: Response) => {
  const targetUserId = await resolveCareTargetUserId(req, res, "can_edit_stock");
  if (!targetUserId) return;

  const stockId = parseStockId(req.params.id);
  const { quantity, location } = req.body;

  if (!stockId) {
    return res.status(400).json({ message: "Invalid stock id" });
  }

  if (quantity === undefined && location === undefined) {
    return res.status(400).json({ message: "No updatable fields provided" });
  }

  if (quantity !== undefined && (!Number.isInteger(quantity) || quantity < 0)) {
    return res.status(400).json({ message: "Invalid quantity: must be an integer >= 0" });
  }

  if (location !== undefined && (typeof location !== "string" || location.trim().length === 0)) {
    return res.status(400).json({ message: "Invalid location" });
  }

  try {
    const stock = await prisma.stock.findFirst({
      where: {
        id: stockId,
        user_id: targetUserId,
      },
      select: {
        id: true,
      },
    });

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    const data: { quantity?: number; location?: string } = {};

    if (quantity !== undefined) {
      data.quantity = quantity;
    }

    if (location !== undefined) {
      data.location = location.trim();
    }

    const updatedStock = await prisma.stock.update({
      where: { id: stock.id },
      data,
      select: {
        id: true,
        user_id: true,
        medication_id: true,
        quantity: true,
        location: true,
        updated_at: true,
      },
    });

    return res.status(200).json({
      message: "Stock updated successfully",
      data: updatedStock,
    });
  } catch (error) {
    console.error("Update stock error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteStock = async (req: AuthenticatedRequest, res: Response) => {
  const targetUserId = await resolveCareTargetUserId(req, res, "can_edit_stock");
  if (!targetUserId) return;

  const stockId = parseStockId(req.params.id);

  if (!stockId) {
    return res.status(400).json({ message: "Invalid stock id" });
  }

  try {
    const stock = await prisma.stock.findFirst({
      where: {
        id: stockId,
        user_id: targetUserId,
      },
      select: {
        id: true,
      },
    });

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    await prisma.stock.delete({
      where: { id: stock.id },
      select: { id: true },
    });

    return res.status(200).json({ message: "Stock deleted successfully" });
  } catch (error) {
    console.error("Delete stock error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
