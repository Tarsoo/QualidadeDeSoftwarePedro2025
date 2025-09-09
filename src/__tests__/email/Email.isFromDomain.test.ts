import  EmailUtils  from "../../EmailUtils";

describe("EmailUtils.isFromDomain", () => {
  it("exact domain match", () => {
    expect(EmailUtils.isFromDomain("user@example.com", "example.com")).toBe(true);
  });

  it("subdomain match", () => {
    expect(EmailUtils.isFromDomain("user@sub.example.com", "example.com")).toBe(true);
  });

  it("different domain", () => {
    expect(EmailUtils.isFromDomain("user@example.com", "other.com")).toBe(false);
  });

  it("invalid inputs", () => {
    expect(EmailUtils.isFromDomain("invalid-email", "example.com")).toBe(false);
    expect(EmailUtils.isFromDomain("user@example.com", "")).toBe(false);
    expect(EmailUtils.isFromDomain(null as unknown as string, "domain")).toBe(false);
    expect(EmailUtils.isFromDomain(undefined as unknown as string, "domain")).toBe(false);
    expect(EmailUtils.isFromDomain("user@example.com", null as unknown as string)).toBe(false);
    expect(EmailUtils.isFromDomain("user@example.com", undefined as unknown as string)).toBe(false);
  });

  it("case insensitive comparison", () => {
    expect(EmailUtils.isFromDomain("user@EXAMPLE.COM", "example.com")).toBe(true);
  });
});
