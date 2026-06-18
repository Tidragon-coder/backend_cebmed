import { describe, expect, test, vi } from "vitest";
import { saveFcmToken } from "../controllers/notification.controller";

const mockRes = () => {
    const res = {};
    res.status = vi.fn().mockReturnValue(res);
    res.json = vi.fn().mockReturnValue(res);
    return res;
};

describe("saveFcmToken", () => {

    test("Err si token manquant", async () => {
        const db = { user: { update: vi.fn() } };
        const req = { user: { id: 1 }, body: {} };
        const res = mockRes();

        await saveFcmToken(req, res, db);

        expect(res.status).toHaveBeenCalledWith(400);
    });

    test("appelle de db.user.update", async () => {
        const db = { user: { update: vi.fn().mockResolvedValue({}) } };
        const req = { user: { id: 1 }, body: { token: "mon-token-fcm" } };
        const res = mockRes();

        await saveFcmToken(req, res, db);

        expect(db.user.update).toHaveBeenCalledWith({
            where: { id: 1 },
            data: { fcmToken: "mon-token-fcm" },
        });
        expect(res.json).toHaveBeenCalledWith({ ok: true });
    });
});
