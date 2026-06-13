import "dotenv/config";
import { prisma } from "../src/lib/prisma";

const MISSED_AFTER_HOURS = parseInt(process.env.MISSED_AFTER_HOURS ?? "5", 10);

async function main() {
  const now = new Date();
  const cutoff = new Date(now.getTime() - MISSED_AFTER_HOURS * 60 * 60 * 1000);

  console.log(`[${now.toISOString()}] Marquage des prises manquées (scheduled_at < ${cutoff.toISOString()})...`);

  const result = await prisma.intake.updateMany({
    where: {
      status: "PENDING",
      scheduled_at: { lt: cutoff },
      treatment: {
        status: "ACTIVE",
      },
    },
    data: { status: "MISSED" },
  });

  console.log(`${result.count} prise(s) marquée(s) MISSED.`);
}

main()
  .catch((err) => {
    console.error("Erreur fatale :", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
