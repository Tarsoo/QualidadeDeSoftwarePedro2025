import { CPFUtils } from "../../CPFUtils";

const LONG_STRING_SIZE = 100;

describe("CPFUtils edge cases", () => {
  it("very long strings", () => {
    const longString = "1".repeat(LONG_STRING_SIZE);
    expect(CPFUtils.validateCPF(longString)).toBe(false);
    expect(() => CPFUtils.maskCPF(longString)).toThrow();
  });

  it("special characters", () => {
    expect(CPFUtils.validateCPF("!@#$%^&*()")).toBe(false);
    expect(() => CPFUtils.maskCPF("!@#$%^&*()")).toThrow();
  });

  it("cpf with spaces", () => {
    expect(CPFUtils.validateCPF(" 123.456.789-09 ")).toBe(true);
  });
});
