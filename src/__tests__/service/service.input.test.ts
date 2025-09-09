import { mockEmailUtils, callService } from "./testUtils";

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("service - input handling", () => {
  it("handles null email", () => {
    mockEmailUtils.validateEmail.mockReturnValue(false);

    const result = callService(
      null as unknown as string,
      "12345678900",
      "11222333000181",
      "Password123!"
    );

    expect(result.success).toBe(false);
    expect(result.details?.email).toBe(false);
  });

  it("handles undefined email", () => {
    mockEmailUtils.validateEmail.mockReturnValue(false);

    const result = callService(
      undefined as unknown as string,
      "12345678900",
      "11222333000181",
      "Password123!"
    );

    expect(result.success).toBe(false);
    expect(result.details?.email).toBe(false);
  });

  it("handles empty email", () => {
    mockEmailUtils.validateEmail.mockReturnValue(false);

    const result = callService(
      "",
      "12345678900",
      "11222333000181",
      "Password123!"
    );

    expect(result.success).toBe(false);
    expect(result.details?.email).toBe(false);
  });
});
