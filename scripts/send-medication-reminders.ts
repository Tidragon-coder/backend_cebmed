import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { sendPushNotification } from "../src/services/notification.service";

// Fenêtre de rappel : intakes prévus dans les prochaines N minutes
const WINDOW_MINUTES = parseInt(process.env.REMINDER_WINDOW_MINUTES ?? "15", 10);

async function main() {
  const now = new Date();
  const windowEnd = new Date(now.getTime() + WINDOW_MINUTES * 60 * 1000);

  console.log(`[${now.toISOString()}] Recherche des prises entre maintenant et +${WINDOW_MINUTES}min...`);

  const intakes = await prisma.intake.findMany({
    where: {
      status: "PENDING",
      scheduled_at: {
        gte: now,
        lte: windowEnd,
      },
      treatment: {
        status: "ACTIVE",
      },
    },
    select: {
      id: true,
      scheduled_at: true,
      treatment: {
        select: {
          dosage: true,
          medication: {
            select: { name: true },
          },
          user: {
            select: {
              id: true,
              firstName: true,
              fcmToken: true,
            },
          },
        },
      },
      schedule: {
        select: { quantity: true, time_of_day: true },
      },
    },
  });

  if (intakes.length === 0) {
    console.log("Aucune prise à rappeler dans cette fenêtre.");
    return;
  }

  console.log(`${intakes.length} prise(s) trouvée(s).`);

  let sent = 0;
  let skipped = 0;
  let failed = 0;

  for (const intake of intakes) {
    const { user, medication, dosage } = intake.treatment;
    const timeOfDay = intake.schedule?.time_of_day ?? intake.scheduled_at.toTimeString().slice(0, 5);
    const quantity = intake.schedule?.quantity ? `${parseFloat(String(intake.schedule.quantity))} ` : "";

    if (!user.fcmToken) {
      console.log(`  [SKIP] User ${user.id} (${user.firstName}) — pas de token FCM`);
      skipped++;
      continue;
    }

    const title = `Rappel médicament — ${timeOfDay}`;
    const body = `Prenez ${quantity}${dosage} de ${medication.name}`;

    try {
      await sendPushNotification(user.fcmToken, title, body, {
        intakeId: String(intake.id),
        type: "medication_reminder",
      });
      console.log(`  [OK]   User ${user.id} (${user.firstName}) — ${medication.name} à ${timeOfDay}`);
      sent++;
    } catch (err: any) {
      console.error(`  [ERR]  User ${user.id} (${user.firstName}) — ${err.message}`);
      failed++;
    }
  }

  console.log(`\nRésumé : ${sent} envoyée(s), ${skipped} ignorée(s) (pas de token), ${failed} erreur(s).`);
}

main()
  .catch((err) => {
    console.error("Erreur fatale :", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
