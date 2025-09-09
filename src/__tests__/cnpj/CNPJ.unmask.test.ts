import { CNPJUtils } from "../../CNPJUtils";

describe("CNPJUtils.unmaskCNPJ", () => {
  it("removes mask", () => {
    expect(CNPJUtils.unmaskCNPJ("11.222.333/0001-81")).toBe("11222333000181");
  });

  it("returns same string if already unmasked", () => {
    expect(CNPJUtils.unmaskCNPJ("11222333000181")).toBe("11222333000181");
  });

  it("removes mixed punctuation", () => {
    expect(CNPJUtils.unmaskCNPJ("11-222.333/0001-81")).toBe("11222333000181");
  });

  it("throws on null/undefined", () => {
    expect(() => CNPJUtils.unmaskCNPJ(null as unknown as string)).toThrow();
    expect(() => CNPJUtils.unmaskCNPJ(undefined as unknown as string)).toThrow();
  });
});
