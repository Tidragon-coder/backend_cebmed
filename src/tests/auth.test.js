import { describe, it, expect, test } from "vitest";
import { isStrongPassword, isValidDate } from "../controllers/auth.controller";

describe("isStrongPassword", () => {
    it("should return true for a strong password", () => {
        expect(isStrongPassword("Abcde123!")).toBe(true);
    });
    it("should return fale for a bad password (Nb carractere)", () => {
        expect(isStrongPassword("Abc123!")).toBe(false);
    });
    it("should return fale for a bad password (no number)", () => {
        expect(isStrongPassword("Abcdefgh!")).toBe(false);
    });
})

describe("isValidDate", () => {
    it("Date is valid", () => {
        expect(isValidDate("2023-01-01")).toBe(true);
    });
    it("Date is not valid", () => {
        expect(isValidDate("2023-01-32")).toBe(false);
    });
})
