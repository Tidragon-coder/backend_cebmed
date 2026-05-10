import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

type AuthUser = JwtPayload & {
    id?: number;
    email?: string;
    name?: string;
};

type AuthenticatedRequest = Request & {user?: AuthUser;};

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.header("authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1]: undefined;

    if (!token) {
        return res.status(401).json({ message: "Token manquant" });
    }

    if (!SECRET) {
        return res.status(500).json({ message: "JWT_SECRET non configure" });
    }

    try {
        const decoded = jwt.verify(token, SECRET) as AuthUser;
        req.user = decoded;
        return next();
    } catch (_err) {
        return res.status(403).json({ message: "Token invalide ou expiré" });
    }
};
