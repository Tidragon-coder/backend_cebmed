import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

// ─── Configure ici ────────────────────────────────────────────────────────────
const FCM_TOKEN   = "de8soO1DTxyzG45r8jlzQu:APA91bFlD0K1kW5x2mtDBDY1Q_c_dO3-csqw6cH1-mRHiC6y9vp6QVpvqIzl_WQEyxLJeec2pbHMsi2NRjj5378PKbTAUX-oeJLtEUHWXYNZiZ-EpkfEtYY";

// Données du médicament (identique au format buildNotification)
const MEDICATION  = "Cétirizine";
const DOSAGE      = "500 mg";
const QUANTITY    = 1;           // comprimés
const TIME_OF_DAY = "13:00";

// ──────────────────────────────────────────────────────────────────────────────

const medLabel = `${QUANTITY} ${DOSAGE} de ${MEDICATION}`;

const TITLE = `💊 Rappel médicament — ${TIME_OF_DAY}`;
const BODY  = `Pensez à prendre ${medLabel}`;
const DATA: Record<string, string> = {
  type:  "medication_reminder",
  level: "initial",
};

const SERVICE_ACCOUNT_PATH =
  process.env.FIREBASE_SERVICE_ACCOUNT_PATH ??
  path.resolve(__dirname, "../firebase-service-account.json");

if (!getApps().length) {
  initializeApp({ credential: cert(SERVICE_ACCOUNT_PATH) });
}

async function main() {
  console.log(`Envoi vers token: ${FCM_TOKEN.slice(0, 20)}…`);
  await getMessaging().send({
    token: FCM_TOKEN,
    notification: { title: TITLE, body: BODY },
    data: DATA,
  });
  console.log("✅ Notification envoyée.");
}

main().catch((err) => {
  console.error("❌ Erreur:", err.message);
  process.exit(1);
});
