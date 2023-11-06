import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { TestComponent } from "./TestComponent";
import user from "@testing-library/user-event";

describe("Testing TestComponent", () => {
  test("Test TestComponent", () => {
    render(<TestComponent />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello World");
  });

  test("Test button", async () => {
    user.setup();
    render(<TestComponent />);
    const button = screen.getByRole("button", { name: "increment count" });
    await user.click(button);
    const countLabel = screen.getByRole("heading", { level: 2 });
    expect(countLabel).toHaveTextContent("1");
  });
});
