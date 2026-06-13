import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { sendPushNotification } from "../src/services/notification.service";

const WINDOW_MINUTES = parseInt(process.env.REMINDER_WINDOW_MINUTES ?? "1440", 10);

// Tolérance ±7min autour de 30min et 60min (cron toutes les 15min)
const FOLLOW_UP_TOLERANCE = 7 * 60 * 1000;
const FOLLOW_UP_30_MIN   = 30 * 60 * 1000;
const FOLLOW_UP_60_MIN   = 60 * 60 * 1000;

type FollowUpLevel = "30min" | "60min";

function followUpWindows(now: Date): Record<FollowUpLevel, { gte: Date; lte: Date }> {
  return {
    "30min": {
      gte: new Date(now.getTime() - FOLLOW_UP_30_MIN - FOLLOW_UP_TOLERANCE),
      lte: new Date(now.getTime() - FOLLOW_UP_30_MIN + FOLLOW_UP_TOLERANCE),
    },
    "60min": {
      gte: new Date(now.getTime() - FOLLOW_UP_60_MIN - FOLLOW_UP_TOLERANCE),
      lte: new Date(now.getTime() - FOLLOW_UP_60_MIN + FOLLOW_UP_TOLERANCE),
    },
  };
}

const intakeSelect = {
  id: true,
  scheduled_at: true,
  notified_at: true,
  treatment: {
    select: {
      dosage: true,
      medication: { select: { name: true } },
      user: { select: { id: true, firstName: true, fcmToken: true } },
    },
  },
  schedule: { select: { quantity: true, time_of_day: true } },
} as const;

function buildNotification(
  intake: { treatment: { dosage: string; medication: { name: string }; user: { firstName: string } }; schedule: { quantity: any; time_of_day: string } | null; scheduled_at: Date },
  level: "initial" | FollowUpLevel
): { title: string; body: string } {
  const { medication, dosage } = intake.treatment;
  const timeOfDay = intake.schedule?.time_of_day ?? intake.scheduled_at.toTimeString().slice(0, 5);
  const quantity = intake.schedule?.quantity ? `${parseFloat(String(intake.schedule.quantity))} ` : "";
  const medLabel = `${quantity}${dosage} de ${medication.name}`;

  if (level === "initial") {
    return {
      title: `Rappel médicament — ${timeOfDay}`,
      body: `Pensez à prendre ${medLabel}`,
    };
  }
  if (level === "30min") {
    return {
      title: `⏰ Vous n'avez pas encore pris votre médicament`,
      body: `Il y a 30 min : ${medLabel} — avez-vous pris votre dose ?`,
    };
  }
  return {
    title: `🔔 Dernier rappel — ${timeOfDay}`,
    body: `⚠️ Dernier rappel : pensez à prendre ${medLabel}`,
  };
}

async function sendBatch(
  intakes: any[],
  level: "initial" | FollowUpLevel
): Promise<{ sent: number; skipped: number; failed: number }> {
  let sent = 0, skipped = 0, failed = 0;

  for (const intake of intakes) {
    const { user } = intake.treatment;

    if (!user.fcmToken) {
      console.log(`  [SKIP][${level}] User ${user.id} (${user.firstName}) — pas de token FCM`);
      skipped++;
      continue;
    }

    const { title, body } = buildNotification(intake, level);

    try {
      await sendPushNotification(user.fcmToken, title, body, {
        intakeId: String(intake.id),
        type: "medication_reminder",
        level,
      });

      if (level === "initial") {
        await prisma.intake.update({
          where: { id: intake.id },
          data: { notified_at: new Date() },
        });
      }

      console.log(`  [OK][${level}] User ${user.id} (${user.firstName}) — ${intake.treatment.medication.name}`);
      sent++;
    } catch (err: any) {
      console.error(`  [ERR][${level}] User ${user.id} (${user.firstName}) — ${err.message}`);
      failed++;
    }
  }

  return { sent, skipped, failed };
}

async function main() {
  const now = new Date();
  const windowEnd = new Date(now.getTime() + WINDOW_MINUTES * 60 * 1000);
  const windows = followUpWindows(now);

  console.log(`[${now.toISOString()}] Lancement des rappels médicaments...`);

  // ── 1. Rappels initiaux ────────────────────────────────────
  const initial = await prisma.intake.findMany({
    where: {
      status: "PENDING",
      notified_at: null,
      scheduled_at: { gte: now, lte: windowEnd },
      treatment: { status: "ACTIVE" },
    },
    select: intakeSelect,
  });

  // ── 2. Relances 30 min ─────────────────────────────────────
  const followUp30 = await prisma.intake.findMany({
    where: {
      status: "PENDING",
      notified_at: windows["30min"],
      treatment: { status: "ACTIVE" },
    },
    select: intakeSelect,
  });

  // ── 3. Relances 60 min ─────────────────────────────────────
  const followUp60 = await prisma.intake.findMany({
    where: {
      status: "PENDING",
      notified_at: windows["60min"],
      treatment: { status: "ACTIVE" },
    },
    select: intakeSelect,
  });

  console.log(`  Initiaux: ${initial.length} | Relances 30min: ${followUp30.length} | Relances 60min: ${followUp60.length}`);

  const r1 = await sendBatch(initial,    "initial");
  const r2 = await sendBatch(followUp30, "30min");
  const r3 = await sendBatch(followUp60, "60min");

  const total = (r: typeof r1) => `${r.sent} envoyée(s), ${r.skipped} ignorée(s), ${r.failed} erreur(s)`;
  console.log(`\nRésumé :`);
  console.log(`  Initial : ${total(r1)}`);
  console.log(`  30 min  : ${total(r2)}`);
  console.log(`  60 min  : ${total(r3)}`);
}

main()
  .catch((err) => {
    console.error("Erreur fatale :", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
