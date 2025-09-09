import { CNPJUtils } from "../../CNPJUtils";
import { CNPJ_LENGTH } from "../../constants";

describe("CNPJUtils.generateValidCNPJ", () => {
  it("generates valid CNPJ of expected length", () => {
    const cnpj = CNPJUtils.generateValidCNPJ();
    expect(cnpj).toHaveLength(CNPJ_LENGTH);
    expect(CNPJUtils.validateCNPJ(cnpj)).toBe(true);
  });

  it("generates different values across calls", () => {
    const a = CNPJUtils.generateValidCNPJ();
    const b = CNPJUtils.generateValidCNPJ();
    expect(a).not.toBe(b);
  });

  it("generates only digits", () => {
    expect(CNPJUtils.generateValidCNPJ()).toMatch(/^\d+$/);
  });
});
