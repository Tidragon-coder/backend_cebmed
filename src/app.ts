import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import newsletterRoutes from "./routes/newsletter.routes";
import medicationRoutes from "./routes/medication.routes";

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
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
});

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec),
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/medication", medicationRoutes);

app.get("/", (_req, res) => {
  res.send("API OK");
});

export default app;