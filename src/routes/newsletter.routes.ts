import { Router } from "express";
import {addNewsletterMail} from "../controllers/newsletter.controller";

const router = Router();

router.post("/new", addNewsletterMail);

export default router;