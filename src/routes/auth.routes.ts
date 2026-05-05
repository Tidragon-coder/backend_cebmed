import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { login } from "../controllers/auth.controller";    
import { me } from "../controllers/auth.controller";

import { authenticate } from "../middlewares/middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", authenticate, me);

export default router;
