import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import authRoutes from "./routes/auth.routes";
import newsletterRoutes from "./routes/newsletter.routes";
import medicationRoutes from "./routes/medication.routes";
import appointmentRoutes from "./routes/appointment.routes";
import documentRoutes from "./routes/document.routes";
import treatmentRoutes from "./routes/treatment.routes";
import stockRoutes from "./routes/stock.routes";
import intakeRoutes from "./routes/intake.routes";
import caregiverInviteRoutes from "./routes/caregiver-invite.routes";

const app = express();

app.use(cors());
app.use(express.json());

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CEBMED API",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./dist/routes/*.js"],
});

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec),
);

app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/medication", medicationRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/treatment", treatmentRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/intake", intakeRoutes);
app.use("/api/caregiver-invites", caregiverInviteRoutes);

app.get("/", (_req, res) => {
  res.send("API OK");
});

export default app;
