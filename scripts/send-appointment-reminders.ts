import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { sendPushNotification } from "../src/services/notification.service";

// Tolérance ±5min (cron toutes les 10min)
const TOLERANCE = 5 * 60 * 1000;
// Borne max : inutile de regarder les RDV au-delà de 7 jours
const MAX_LOOKAHEAD_MS = 7 * 24 * 60 * 60 * 1000;

function formatDelay(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h}h` : `${h}h${m}`;
}

async function main() {
  const now = new Date();

  console.log(`[${now.toISOString()}] Recherche des rappels RDV...`);

  // Récupère tous les RDV avec notification activée et reminder_delay défini,
  // pas encore notifiés, dont le moment de rappel tombe dans [now-1min, now+1min]
  const appointments = await prisma.appointment.findMany({
    where: {
      notifications_enabled: true,
      reminded_at: null,
      reminder_delay: { not: null },
      start_time: {
        gte: new Date(now.getTime() + TOLERANCE),
        lte: new Date(now.getTime() + MAX_LOOKAHEAD_MS),
      },
    },
    select: {
      id: true,
      title: true,
      location: true,
      start_time: true,
      reminder_delay: true,
      user: {
        select: { id: true, firstName: true, fcmToken: true },
      },
    },
  });

  // Filtre côté JS : le moment du rappel (start_time - reminder_delay) doit être dans la fenêtre
  const toNotify = appointments.filter((appt) => {
    const reminderAt = new Date(appt.start_time.getTime() - appt.reminder_delay! * 60 * 1000);
    return reminderAt >= new Date(now.getTime() - TOLERANCE)
        && reminderAt <= new Date(now.getTime() + TOLERANCE);
  });

  if (toNotify.length === 0) {
    console.log("Aucun rappel RDV à envoyer.");
    return;
  }

  console.log(`${toNotify.length} rappel(s) à envoyer.`);

  let sent = 0, skipped = 0, failed = 0;

  for (const appt of toNotify) {
    const { user } = appt;

    if (!user.fcmToken) {
      console.log(`  [SKIP] User ${user.id} (${user.firstName}) — pas de token FCM`);
      skipped++;
      continue;
    }

    const delayLabel = formatDelay(appt.reminder_delay!);

    const title = `📅 Rappel RDV dans ${delayLabel}`;
    const body = appt.location
      ? `${appt.title} — ${appt.location}`
      : appt.title;

    try {
      await sendPushNotification(user.fcmToken, title, body, {
        appointmentId: String(appt.id),
        type: "appointment_reminder",
      });

      await prisma.appointment.update({
        where: { id: appt.id },
        data: { reminded_at: new Date() },
      });

      console.log(`  [OK] User ${user.id} (${user.firstName}) — "${appt.title}" dans ${delayLabel}`);
      sent++;
    } catch (err: any) {
      console.error(`  [ERR] User ${user.id} (${user.firstName}) — ${err.message}`);
      failed++;
    }
  }

  console.log(`\nRésumé : ${sent} envoyé(s), ${skipped} ignoré(s) (pas de token), ${failed} erreur(s).`);
}

main()
  .catch((err) => {
    console.error("Erreur fatale :", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
