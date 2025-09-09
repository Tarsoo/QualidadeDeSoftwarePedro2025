
import {
  mockValidDependencies,
  mockEmailUtils,
  callValidService,
  callService,
} from "./testUtils";

let spyLog: jest.SpyInstance<void, [message?: unknown, ...optional: unknown[]]>;
let spyWarn: jest.SpyInstance<void, [message?: unknown, ...optional: unknown[]]>;

beforeEach(() => {
  jest.clearAllMocks();
  spyLog = jest.spyOn(console, "log").mockImplementation(() => {});
  spyWarn = jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

function joinedCalls():string{
  const logs = (spyLog.mock.calls as unknown[][]).flat().join(" ");
  const warns = (spyWarn.mock.calls as unknown[][]).flat().join(" ");
  return `${logs} ${warns}`;
}

describe("service - console logging", () => {
  it("logs service start", () => {
    mockValidDependencies();
    callValidService();
    expect(spyLog.mock.calls.length + spyWarn.mock.calls.length).toBeGreaterThan(0);
    expect(joinedCalls()).toEqual(expect.stringContaining("Iniciando serviço"));
  });

  it("logs validation failures", () => {
    mockEmailUtils.validateEmail.mockReturnValue(false);
    callService("invalid-email", "12345678900", "11222333000181", "Password123!");
    expect(spyLog.mock.calls.length + spyWarn.mock.calls.length).toBeGreaterThan(0);
    expect(joinedCalls()).toEqual(expect.stringContaining("Dados inválidos"));
  });
});
