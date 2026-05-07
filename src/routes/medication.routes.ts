import { Router } from "express";
import { getMedicationsByName } from "../controllers/medication.controller";

import { authenticate } from "../middlewares/middleware";

const router = Router();

router.get("/nameSearch", authenticate, getMedicationsByName);

export default router;
