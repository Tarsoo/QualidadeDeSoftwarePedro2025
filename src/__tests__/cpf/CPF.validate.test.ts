import { CPFUtils } from "../../CPFUtils";
import { CPF_LENGTH } from "../../constants";

describe("CPFUtils.validateCPF", () => {
  it("valid masked CPF", () => {
    expect(CPFUtils.validateCPF("529.982.247-25")).toBe(true);
  });

  it("valid unmasked CPF", () => {
    expect(CPFUtils.validateCPF("52998224725")).toBe(true);
  });

  it("rejects invalid length", () => {
    expect(CPFUtils.validateCPF("123456789")).toBe(false);
  });

  it("rejects repeated digits", () => {
    expect(CPFUtils.validateCPF("1".repeat(CPF_LENGTH))).toBe(false);
  });

  it("rejects invalid CPF (wrong check digit)", () => {
    expect(CPFUtils.validateCPF("123.456.789-10")).toBe(false);
  });

  it("rejects empty string", () => {
    expect(CPFUtils.validateCPF("")).toBe(false);
  });

  it("throws on null/undefined", () => {
    expect(() => CPFUtils.validateCPF(null as unknown as string)).toThrow();
    expect(() => CPFUtils.validateCPF(undefined as unknown as string)).toThrow();
  });
});
