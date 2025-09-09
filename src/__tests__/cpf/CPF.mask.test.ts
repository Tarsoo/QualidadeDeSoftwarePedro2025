import { CPFUtils } from "../../CPFUtils";

describe("CPFUtils.maskCPF", () => {
  it("masks a valid CPF", () => {
    expect(CPFUtils.maskCPF("12345678909")).toBe("123.456.789-09");
  });

  it("is idempotent when already masked", () => {
    const masked = "123.456.789-09";
    expect(CPFUtils.maskCPF(masked)).toBe(masked);
  });

  it("throws for invalid length", () => {
    expect(() => CPFUtils.maskCPF("123456789")).toThrow("CPF deve ter 11 dígitos");
  });

  it("handles special chars", () => {
    expect(CPFUtils.maskCPF("123-456-789-09")).toBe("123.456.789-09");
  });

  it("throws on null/undefined", () => {
    expect(() => CPFUtils.maskCPF(null as unknown as string)).toThrow();
    expect(() => CPFUtils.maskCPF(undefined as unknown as string)).toThrow();
  });
});
