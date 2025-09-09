import {
  callService,
  mockEmailUtils,
  mockCNPJUtils,
  mockCPFUtils,
} from "./testUtils";
import * as PasswordModule from "../../passwordUtils";

const mockValidatePassword = jest.spyOn(PasswordModule, "validatePassword");

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("service - validation failures", () => {
  it("fails when email is invalid", () => {
    mockEmailUtils.validateEmail.mockReturnValue(false);
    mockValidatePassword.mockReturnValue(true);
    mockCNPJUtils.validateCNPJ.mockReturnValue(true);
    mockCPFUtils.validateCPF.mockReturnValue(true);

    const result = callService(
      "invalid-email",
      "12345678900",
      "11222333000181",
      "Password123!"
    );

    expect(result.success).toBe(false);
    expect(result.message).toBe("Dados inválidos");
    expect(result.details).toEqual({
      email: false,
      cpf: true,
      cnpj: true,
      password: true,
    });
  });

  it("fails when password is invalid", () => {
    mockEmailUtils.validateEmail.mockReturnValue(true);
    mockValidatePassword.mockReturnValue(false);
    mockCNPJUtils.validateCNPJ.mockReturnValue(true);
    mockCPFUtils.validateCPF.mockReturnValue(true);

    const result = callService(
      "test@example.com",
      "12345678900",
      "11222333000181",
      "weak"
    );

    expect(result.success).toBe(false);
    expect(result.details?.password).toBe(false);
  });

  it("fails when CNPJ is invalid", () => {
    mockEmailUtils.validateEmail.mockReturnValue(true);
    mockValidatePassword.mockReturnValue(true);
    mockCNPJUtils.validateCNPJ.mockReturnValue(false);
    mockCPFUtils.validateCPF.mockReturnValue(true);

    const result = callService(
      "test@example.com",
      "12345678900",
      "invalid-cnpj",
      "Password123!"
    );

    expect(result.success).toBe(false);
    expect(result.details?.cnpj).toBe(false);
  });

  it("fails when multiple validations fail", () => {
    mockEmailUtils.validateEmail.mockReturnValue(false);
    mockValidatePassword.mockReturnValue(false);
    mockCNPJUtils.validateCNPJ.mockReturnValue(false);
    mockCPFUtils.validateCPF.mockReturnValue(false);

    const result = callService("invalid-email", "12345678900", "invalid-cnpj", "weak");

    expect(result.success).toBe(false);
    expect(result.details).toEqual({
      email: false,
      cpf: false,
      cnpj: false,
      password: false,
    });
  });
});
