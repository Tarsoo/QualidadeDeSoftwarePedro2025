import { CNPJUtils } from "../../CNPJUtils";

describe("CNPJUtils.maskCNPJ", () => {
  it("masks a valid CNPJ", () => {
    expect(CNPJUtils.maskCNPJ("11222333000181")).toBe("11.222.333/0001-81");
  });

  it("is idempotent when already masked", () => {
    const masked = "11.222.333/0001-81";
    expect(CNPJUtils.maskCNPJ(masked)).toBe(masked);
  });

  it("throws for invalid length", () => {
    expect(() => CNPJUtils.maskCNPJ("123456789")).toThrow("CNPJ deve ter 14 dígitos");
  });

  it("handles special chars", () => {
    expect(CNPJUtils.maskCNPJ("11-222-333/0001-81")).toBe("11.222.333/0001-81");
  });

  it("throws on null/undefined", () => {
    expect(() => CNPJUtils.maskCNPJ(null as unknown as string)).toThrow();
    expect(() => CNPJUtils.maskCNPJ(undefined as unknown as string)).toThrow();
  });
});
