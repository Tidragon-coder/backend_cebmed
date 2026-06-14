const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const sender = {
  email: process.env.BREVO_SENDER_EMAIL!,
  name: process.env.BREVO_SENDER_NAME ?? "CebMed",
};

const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender,
      to: [{ email: to }],
      subject,
      htmlContent,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Brevo error: ${JSON.stringify(error)}`);
  }
};

export const sendVerificationEmail = async (to: string, code: string) => {
  await sendEmail(
    to,
    "Activez votre compte CebMed",
    `
      <div style="font-family:sans-serif;max-width:500px;margin:auto;">
        <h2 style="color:#e91e8c;">Bienvenue sur CebMed 💊</h2>
        <p>Votre code de vérification est :</p>
        <h1 style="letter-spacing:8px;color:#333;text-align:center;">${code}</h1>
        <p style="color:#999;font-size:12px;margin-top:24px;">Ce code expire dans 24h.</p>
      </div>
    `
  );
};

export const syncNewsletterContactToBrevo = async (email: string): Promise<void> => {
  const listId = process.env.BREVO_LIST_ID ? parseInt(process.env.BREVO_LIST_ID) : null;
  if (!listId || !process.env.BREVO_API_KEY) return;

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Brevo contact sync error: ${JSON.stringify(error)}`);
  }
};

export const sendPasswordResetEmail = async (to: string, token: string) => {
  const link = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  await sendEmail(
    to,
    "Réinitialisation de mot de passe — CebMed",
    `
      <div style="font-family:sans-serif;max-width:500px;margin:auto;">
        <h2 style="color:#e91e8c;">Réinitialisation de mot de passe</h2>
        <p>Vous avez demandé à réinitialiser votre mot de passe CebMed.</p>
        <a href="${link}" style="display:inline-block;padding:12px 24px;background:#e91e8c;color:#fff;border-radius:6px;text-decoration:none;">
          Réinitialiser mon mot de passe
        </a>
        <p style="color:#999;font-size:12px;margin-top:24px;">Ce lien expire dans 1h. Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>
      </div>
    `
  );
};