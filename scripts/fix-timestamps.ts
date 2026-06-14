import "dotenv/config";
import { prisma } from "../src/lib/prisma";

// Décalage à corriger (en heures). Mettre 1 si la DB est en retard d'1h, 2 si 2h.
const OFFSET_HOURS = 2;

async function main() {
  console.log(`Correction des timestamps : +${OFFSET_HOURS}h sur toutes les lignes créées avant aujourd'hui...`);

  const [appointments, intakes] = await Promise.all([
    prisma.$executeRaw`
      UPDATE appointments
      SET start_time = start_time + (${OFFSET_HOURS} || ' hours')::interval,
          end_time   = end_time   + (${OFFSET_HOURS} || ' hours')::interval
      WHERE created_at < NOW()
    `,
    prisma.$executeRaw`
      UPDATE intakes
      SET scheduled_at = scheduled_at + (${OFFSET_HOURS} || ' hours')::interval
      WHERE created_at < NOW()
    `,
  ]);

  console.log(`✓ ${appointments} rendez-vous corrigés`);
  console.log(`✓ ${intakes} prises corrigées`);
}

main()
  .catch((err) => {
    console.error("Erreur :", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
