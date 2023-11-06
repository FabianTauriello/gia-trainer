import "@testing-library/jest-dom";
import "whatwg-fetch";
import { server } from "../mocks/server";

// Perform pre-test configuration for each test file
beforeAll(() => {
  server.listen();
});

// Perform pre-test configuration for each test
beforeEach(() => {
  server.resetHandlers();
});

// Clean up after all tests are finished for each test file
afterAll(() => {
  server.close();
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
