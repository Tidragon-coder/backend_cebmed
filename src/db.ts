import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("✅ Connecté à PostgreSQL");
  } catch (err) {
    console.error("❌ Erreur connexion DB", err);
  }
};