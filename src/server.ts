import "dotenv/config";
import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = 3000;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to database with Prisma");
  } catch (error) {
    console.error("Failed to connect to database with Prisma", error);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log(`Swagger: http://localhost:${PORT}/docs`);
  });
};

startServer();
