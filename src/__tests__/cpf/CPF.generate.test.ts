import { CPFUtils } from "../../CPFUtils";
import { CPF_LENGTH } from "../../constants";

describe("CPFUtils.generateValidCPF", () => {
  it("generates valid CPF of expected length", () => {
    const cpf = CPFUtils.generateValidCPF();
    expect(cpf).toHaveLength(CPF_LENGTH);
    expect(CPFUtils.validateCPF(cpf)).toBe(true);
  });

  it("generates different values across calls", () => {
    const a = CPFUtils.generateValidCPF();
    const b = CPFUtils.generateValidCPF();
    expect(a).not.toBe(b);
  });

  it("generates only digits", () => {
    expect(CPFUtils.generateValidCPF()).toMatch(/^\d+$/);
  });
});
