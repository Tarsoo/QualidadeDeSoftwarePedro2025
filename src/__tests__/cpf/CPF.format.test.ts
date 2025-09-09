import { CPFUtils } from "../../CPFUtils";

describe("CPFUtils.isValidFormat", () => {
  it("accepts masked", () => {
    expect(CPFUtils.isValidFormat("123.456.789-09")).toBe(true);
  });

  it("accepts unmasked", () => {
    expect(CPFUtils.isValidFormat("12345678909")).toBe(true);
  });

  it("accepts partial", () => {
    expect(CPFUtils.isValidFormat("123.456")).toBe(true);
  });

  it("rejects invalid", () => {
    expect(CPFUtils.isValidFormat("123.456.789-0A")).toBe(false);
  });

  it("empty string is ok", () => {
    expect(CPFUtils.isValidFormat("")).toBe(true);
  });

  it("null/undefined handling", () => {
    expect(CPFUtils.isValidFormat(null as unknown as string)).toBe(true);
    expect(CPFUtils.isValidFormat(undefined as unknown as string)).toBe(true);
  });
});
