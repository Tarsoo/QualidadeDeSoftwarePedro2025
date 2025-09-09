import  EmailUtils  from "../../EmailUtils";

describe("EmailUtils.extractLocalPart", () => {
  it("valid local part", () => {
    expect(EmailUtils.extractLocalPart("user@example.com")).toBe("user");
  });

  it("with dots", () => {
    expect(EmailUtils.extractLocalPart("user.name@example.com")).toBe("user.name");
  });

  it("invalid cases", () => {
    expect(EmailUtils.extractLocalPart("invalid-email")).toBe(null);
    expect(EmailUtils.extractLocalPart("user@example@domain.com")).toBe(null);
    expect(EmailUtils.extractLocalPart(null as unknown as string)).toBe(null);
    expect(EmailUtils.extractLocalPart(undefined as unknown as string)).toBe(null);
  });
});
