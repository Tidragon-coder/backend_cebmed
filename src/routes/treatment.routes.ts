import { Router } from "express";
import { createTreatments, getMyTreatments } from "../controllers/treatments.controller";

import { authenticate } from "../middlewares/middleware";

const router = Router();

router.post("/new", authenticate, createTreatments);
router.get("/me", authenticate, getMyTreatments);

export default router;
