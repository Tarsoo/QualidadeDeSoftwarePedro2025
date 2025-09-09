import  EmailUtils  from "../../EmailUtils";

describe("EmailUtils.normalizeEmail", () => {
  it("lowercase", () => {
    expect(EmailUtils.normalizeEmail("USER@EXAMPLE.COM")).toBe("user@example.com");
  });

  it("trims whitespace", () => {
    expect(EmailUtils.normalizeEmail("  user@example.com  ")).toBe("user@example.com");
  });

  it("mixed case", () => {
    expect(EmailUtils.normalizeEmail("User@Example.Com")).toBe("user@example.com");
  });

  it("with spaces inside", () => {
    expect(EmailUtils.normalizeEmail(" user name @ example . com ")).toBe("user name @ example . com");
  });

  it("throws on null/undefined", () => {
    expect(() => EmailUtils.normalizeEmail(null as unknown as string)).toThrow();
    expect(() => EmailUtils.normalizeEmail(undefined as unknown as string)).toThrow();
  });
});
