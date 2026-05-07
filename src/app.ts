import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import newsletterRoutes from "./routes/newsletter.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.get("/", (_req, res) => {
  res.send("API OK");
});

export default app;
