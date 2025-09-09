import  EmailUtils  from "../../EmailUtils";
import { EMAIL_LOCAL_MAX, EMAIL_DOMAIN_MAX } from "../../constants";

describe("EmailUtils edge cases", () => {
  it("rejects very long local part", () => {
    const longLocal = "a".repeat(EMAIL_LOCAL_MAX + 1);
    expect(EmailUtils.validateEmail(`${longLocal}@example.com`)).toBe(false);
  });

  it("rejects very long domain", () => {
    const longDomain = "a".repeat(EMAIL_DOMAIN_MAX + 1);
    expect(EmailUtils.validateEmail(`user@${longDomain}.com`)).toBe(false);
  });

  it("accepts special chars in local part", () => {
    expect(EmailUtils.validateEmail("user+tag@example.com")).toBe(true);
  });

  it("rejects consecutive dots", () => {
    expect(EmailUtils.validateEmail("user..name@example.com")).toBe(false);
    expect(EmailUtils.validateEmail("user@example..com")).toBe(false);
  });
});
