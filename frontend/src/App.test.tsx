import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, test, expect, afterEach } from "vitest";
import App from "./App";

afterEach(() => {
  vi.restoreAllMocks();
});

test("displays task count afterr API call", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ userId: 1, status: "done", count: 2 }),
    })
  );

  render(<App />);

  fireEvent.click(screen.getByText("Get task count"));

  await waitFor(() => {
    expect(screen.getByText("Task count: 2")).toBeInTheDocument();
  });
});

test("displays error message whn API fails", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Invalid input" }),
    })
  );

  render(<App />);

  fireEvent.click(screen.getByText("Get task count"));

  await waitFor(() => {
    expect(screen.getByText("Invalid input")).toBeInTheDocument();
  });
});