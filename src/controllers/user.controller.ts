import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    res.json([
        { id: 1, name: "Theo" },
        { id: 2, name: "Marie" }
    ]);
};
