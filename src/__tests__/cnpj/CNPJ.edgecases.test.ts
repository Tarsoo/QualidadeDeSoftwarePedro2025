import { CNPJUtils } from "../../CNPJUtils";

const LONG_STRING_SIZE = 100;

describe("CNPJUtils edge cases", () => {
  it("very long strings", () => {
    const longString = "1".repeat(LONG_STRING_SIZE);
    expect(CNPJUtils.validateCNPJ(longString)).toBe(false);
    expect(() => CNPJUtils.maskCNPJ(longString)).toThrow();
  });

  it("special characters", () => {
    const special = "!@#$%^&*()";
    expect(CNPJUtils.validateCNPJ(special)).toBe(false);
    expect(() => CNPJUtils.maskCNPJ(special)).toThrow();
  });
});
