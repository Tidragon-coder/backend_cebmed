import { describe, expect, test, vi } from "vitest";
import { getMedicationsByName } from "../controllers/medication.controller";

const mockRes = () => {
    const res = {};
    res.status = vi.fn().mockReturnValue(res);
    res.json = vi.fn().mockReturnValue(res);
    return res;
};

describe("getMedicationsByName", () => {

    test("retourne les medications trouvées", async () => {
        const db = {medication: { findMany: vi.fn().mockResolvedValue([
                    { id: 1, name: "Doliprane" },
                    { id: 2, name: "Doliprane 500" },
                ]),
            },
        };
        const req = { query: { name: "Doli" } };
        const res = mockRes();

        await getMedicationsByName(req, res, db);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ count: 2, data: expect.any(Array) });
    });

    test("retourne 500 si la DB plante", async () => {
        const db = {medication: { findMany: vi.fn().mockRejectedValue(
            new Error("DB error")),
            },
        };
        const req = { query: { name: "Doli" } };
        const res = mockRes();

        await getMedicationsByName(req, res, db);

        expect(res.status).toHaveBeenCalledWith(500);
    });

});
