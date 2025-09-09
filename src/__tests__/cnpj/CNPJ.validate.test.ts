import { CNPJUtils } from "../../CNPJUtils";
import { CNPJ_LENGTH } from "../../constants";

describe("CNPJUtils.validateCNPJ", () => {
  it("valid masked CNPJ", () => {
    expect(CNPJUtils.validateCNPJ("11.222.333/0001-81")).toBe(true);
  });

  it("valid unmasked CNPJ", () => {
    expect(CNPJUtils.validateCNPJ("11222333000181")).toBe(true);
  });

  it("rejects invalid length", () => {
    expect(CNPJUtils.validateCNPJ("123456789")).toBe(false);
  });

  it("rejects repeated digits", () => {
    expect(CNPJUtils.validateCNPJ("1".repeat(CNPJ_LENGTH))).toBe(false);
  });

  it("rejects invalid CNPJ (wrong check digit)", () => {
    expect(CNPJUtils.validateCNPJ("11.222.333/0001-82")).toBe(false);
  });

  it("rejects empty string", () => {
    expect(CNPJUtils.validateCNPJ("")).toBe(false);
  });

  it("throws on null/undefined", () => {
    expect(() => CNPJUtils.validateCNPJ(null as unknown as string)).toThrow();
    expect(() => CNPJUtils.validateCNPJ(undefined as unknown as string)).toThrow();
  });
});
