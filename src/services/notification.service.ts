import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import path from "path";

if (!getApps().length) {
  initializeApp({
    credential: cert(path.resolve("/app/firebase-service-account.json")),
  });
}

export async function sendPushNotification(
  fcmToken: string,
  title: string,
  body: string,
  data: Record<string, string> = {}
): Promise<void> {
  await getMessaging().send({
    token: fcmToken,
    notification: { title, body },
    data,
  });
}
