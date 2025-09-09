import { service } from "../../service";
import  EmailUtils  from "../../EmailUtils";
import { CNPJUtils } from "../../CNPJUtils";
import { CPFUtils } from "../../CPFUtils";
import * as PasswordModule from "../../passwordUtils";

jest.mock("../../EmailUtils");
jest.mock("../../CNPJUtils");
jest.mock("../../CPFUtils");
jest.mock("../../passwordUtils");

export type ServiceResultLike = {
  success: boolean;
  message: string;
  timestamp: string;
  summary: {
    totalProcessed: number;
    validRecords: number;
    invalidRecords: number;
    apiCalls: number;
    backupCreated: boolean;
    integrityValid: boolean;
    auditCompleted: boolean;
    dataExported: boolean;
  };
  details?: { email: boolean; cpf: boolean; cnpj: boolean; password: boolean };
  data: {
    processed: {
      normalizedEmail: string;
      domain: string;
      isFromSpecificDomain: boolean;
      maskedCNPJ: string;
      unmaskedCNPJ: string;
      cnpjFormatValid: boolean;
    };
    test: { testCNPJ: string; testEmail: string; testPassword: string };
    batch: Array<{
      originalData: { email: string; password: string; cnpj: string };
      isValid: boolean;
    }>;
    report: {
      timestamp: string;
      totalRecords: number;
      validRecords: number;
      invalidRecords: number;
      apiCalls: number;
      domain: string;
      isFromSpecificDomain: boolean;
    };
    backup: {
      timestamp: string;
      data: unknown[];
      checksum: number;
      originalInput: {
        email: string;
        cpf: string;
        cnpj: string;
        password: string;
      };
    };
    integrity: { isValid: boolean; errors: string[]; totalChecks: number };
    audit: {
      timestamp: string;
      suspiciousEmails: number;
      duplicateCNPJs: number;
      totalOperations: number;
    };
    exported: { format: string; content: string; size: number };
  };
};

export const mockEmailUtils = EmailUtils as jest.Mocked<typeof EmailUtils>;
export const mockCNPJUtils = CNPJUtils as jest.Mocked<typeof CNPJUtils>;
export const mockCPFUtils = CPFUtils as jest.Mocked<typeof CPFUtils>;
export const mockValidatePassword =
  PasswordModule.validatePassword as jest.MockedFunction<
    typeof PasswordModule.validatePassword
  >;

function mockEmailOk(): void {
  mockEmailUtils.validateEmail.mockReturnValue(true);
  mockEmailUtils.normalizeEmail.mockReturnValue("test@example.com");
  mockEmailUtils.extractDomain.mockReturnValue("example.com");
  mockEmailUtils.isFromDomain.mockReturnValue(true);
}

function mockCNPJOk(): void {
  mockCNPJUtils.validateCNPJ.mockReturnValue(true);
  mockCNPJUtils.maskCNPJ.mockReturnValue("11.222.333/0001-81");
  mockCNPJUtils.unmaskCNPJ.mockReturnValue("11222333000181");
  mockCNPJUtils.isValidFormat.mockReturnValue(true);
  mockCNPJUtils.generateValidCNPJ.mockReturnValue("99888777000166");
}

function mockCPFOk(): void {
  mockCPFUtils.validateCPF.mockReturnValue(true);
  mockCPFUtils.maskCPF.mockReturnValue("123.456.789-00");
  mockCPFUtils.unmaskCPF.mockReturnValue("12345678900");
  mockCPFUtils.isValidFormat.mockReturnValue(true);
  mockCPFUtils.generateValidCPF.mockReturnValue("11144477735");
}

function mockPasswordOk(): void {
  mockValidatePassword.mockReturnValue(true);
}

export function mockValidDependencies(): void {
  mockEmailOk();
  mockCNPJOk();
  mockCPFOk();
  mockPasswordOk();
}

export function callValidService(): ServiceResultLike {
  return service(
    "test@example.com",
    "12345678900",
    "11222333000181",
    "Password123!"
  ) as unknown as ServiceResultLike;
}

export function callService(
  email: string,
  cpf: string,
  cnpj: string,
  password: string
): ServiceResultLike {
  return service(email, cpf, cnpj, password) as unknown as ServiceResultLike;
}
