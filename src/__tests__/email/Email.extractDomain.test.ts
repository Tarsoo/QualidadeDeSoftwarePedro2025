import  EmailUtils  from "../../EmailUtils";

describe("EmailUtils.extractDomain", () => {
  it("valid domain", () => {
    expect(EmailUtils.extractDomain("user@example.com")).toBe("example.com");
  });

  it("with subdomain", () => {
    expect(EmailUtils.extractDomain("user@sub.example.com")).toBe("sub.example.com");
  });

  it("invalid cases", () => {
    expect(EmailUtils.extractDomain("invalid-email")).toBe(null);
    expect(EmailUtils.extractDomain("user@example@domain.com")).toBe(null);
    expect(EmailUtils.extractDomain(null as unknown as string)).toBe(null);
    expect(EmailUtils.extractDomain(undefined as unknown as string)).toBe(null);
  });
});
