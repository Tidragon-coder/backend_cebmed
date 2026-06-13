const admin = require('firebase-admin');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(
            require('/app/firebase-service-account.json')
        )
    });
}

async function sendPushNotification(fcmToken, title, body, data = {}) {
    try {
        await admin.messaging().send({
            token: fcmToken,
            notification: { title, body },
            data,
        });
        console.log('Notification envoyée');
    } catch (err) {
        console.error('FCM error:', err.message);
    }
}

module.exports = { sendPushNotification };