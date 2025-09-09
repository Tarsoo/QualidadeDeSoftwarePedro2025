import { CPFUtils } from "../../CPFUtils";

describe("CPFUtils.unmaskCPF", () => {
  it("removes mask", () => {
    expect(CPFUtils.unmaskCPF("123.456.789-09")).toBe("12345678909");
  });

  it("returns same string if already unmasked", () => {
    expect(CPFUtils.unmaskCPF("12345678909")).toBe("12345678909");
  });

  it("removes mixed punctuation", () => {
    expect(CPFUtils.unmaskCPF("123-456.789-09")).toBe("12345678909");
  });

  it("throws on null/undefined", () => {
    expect(() => CPFUtils.unmaskCPF(null as unknown as string)).toThrow();
    expect(() => CPFUtils.unmaskCPF(undefined as unknown as string)).toThrow();
  });
});
