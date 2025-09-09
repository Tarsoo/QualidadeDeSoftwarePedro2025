import { CNPJUtils } from "../../CNPJUtils";

describe("CNPJUtils.isValidFormat", () => {
  it("accepts masked", () => {
    expect(CNPJUtils.isValidFormat("11.222.333/0001-81")).toBe(true);
  });

  it("accepts unmasked", () => {
    expect(CNPJUtils.isValidFormat("11222333000181")).toBe(true);
  });

  it("accepts partial", () => {
    expect(CNPJUtils.isValidFormat("11.222")).toBe(true);
  });

  it("rejects invalid", () => {
    expect(CNPJUtils.isValidFormat("11.222.333/0001-8A")).toBe(false);
  });

  it("empty string is ok", () => {
    expect(CNPJUtils.isValidFormat("")).toBe(true);
  });

  it("null/undefined handling", () => {
    expect(CNPJUtils.isValidFormat(null as unknown as string)).toBe(true);
    expect(CNPJUtils.isValidFormat(undefined as unknown as string)).toBe(true);
  });
});
