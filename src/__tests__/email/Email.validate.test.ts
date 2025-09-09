import  EmailUtils  from "../../EmailUtils";

describe("EmailUtils.validateEmail", () => {
  it("valid simple email", () => {
    expect(EmailUtils.validateEmail("test@example.com")).toBe(true);
  });

  it("valid with subdomain", () => {
    expect(EmailUtils.validateEmail("user@sub.example.com")).toBe(true);
  });

  it("valid with numbers", () => {
    expect(EmailUtils.validateEmail("user123@example123.com")).toBe(true);
  });

  it("valid with special characters", () => {
    expect(EmailUtils.validateEmail("user.name+tag@example.com")).toBe(true);
  });

  it("rejects missing @", () => {
    expect(EmailUtils.validateEmail("testexample.com")).toBe(false);
  });

  it("rejects missing domain", () => {
    expect(EmailUtils.validateEmail("test@")).toBe(false);
  });

  it("rejects missing local part", () => {
    expect(EmailUtils.validateEmail("@example.com")).toBe(false);
  });

  it("rejects invalid characters", () => {
    expect(EmailUtils.validateEmail("test@example..com")).toBe(false);
  });

  it("rejects starting/ending with dot", () => {
    expect(EmailUtils.validateEmail(".test@example.com")).toBe(false);
    expect(EmailUtils.validateEmail("test.@example.com")).toBe(false);
  });

  it("rejects domain starting/ending with dot", () => {
    expect(EmailUtils.validateEmail("test@.example.com")).toBe(false);
    expect(EmailUtils.validateEmail("test@example.com.")).toBe(false);
  });

  it("rejects empty/null/undefined", () => {
    expect(EmailUtils.validateEmail("")).toBe(false);
    expect(EmailUtils.validateEmail(null as unknown as string)).toBe(false);
    expect(EmailUtils.validateEmail(undefined as unknown as string)).toBe(false);
  });
});
