type BrevoConfig = {
  apiKey: string;
  listId?: number;
};

const getBrevoConfig = (): BrevoConfig | null => {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return null;

  const listIdRaw = process.env.BREVO_LIST_ID;
  const listId = listIdRaw ? Number(listIdRaw) : undefined;

  return {
    apiKey,
    listId: Number.isFinite(listId) ? listId : undefined,
  };
};

export const syncNewsletterContactToBrevo = async (email: string): Promise<void> => {
  const config = getBrevoConfig();
  if (!config) {
    return;
  }

  const payload: Record<string, unknown> = {
    email,
    emailBlacklisted: false,
    smsBlacklisted: true,
    updateEnabled: true,
  };

  if (config.listId !== undefined) {
    payload.listIds = [config.listId];
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": config.apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok && response.status !== 204) {
    const text = await response.text();
    throw new Error(`Brevo sync failed (${response.status}): ${text}`);
  }
};
