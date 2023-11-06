import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { SignIn } from "routes/SignIn";
import { customRender } from "./test-utils";
import { describe } from "vitest";

describe("SignIn", () => {
  test("Email input receives focus", async () => {
    user.setup();
    customRender(<SignIn />);
    const emailLabel = screen.getByText(/email/i);
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    await user.click(emailLabel);

    expect(emailInput).toHaveFocus();
  });

  test("Password input receives focus", async () => {
    user.setup();
    customRender(<SignIn />);
    const passwordLabel = screen.getByText(/password/i);
    const passwordInput = screen.getByLabelText(/Password/); // Inputs with a 'password' type don't have a role so use getByLabelText() instead
    await user.click(passwordLabel);

    expect(passwordInput).toHaveFocus();
  });

  test("Password input type default is password", async () => {
    customRender(<SignIn />);
    const passwordInput = screen.getByLabelText(/Password/);

    expect(passwordInput).toHaveAttribute("type", "password");
  });

  test("Password input type changes to text", async () => {
    user.setup();
    customRender(<SignIn />);
    const togglePasswordVisibilityButton = screen.getByRole("button", { name: /toggle password type/i });
    const passwordInput = screen.getByLabelText(/Password/);

    expect(passwordInput).toHaveAttribute("type", "password");
    await user.click(togglePasswordVisibilityButton);
    expect(passwordInput).toHaveAttribute("type", "text");
  });

  test("Sign-in is default view", () => {
    customRender(<SignIn />);

    const signInLabel = screen.getByRole("heading", {
      name: /sign in to your account/i,
    });

    expect(signInLabel).toBeInTheDocument();
  });

  test("Sign-in view changes to sign up view", async () => {
    user.setup();
    customRender(<SignIn />);
    const signUpButton = screen.getByText(/sign up/i);
    const signUpLabel = screen.queryByRole("heading", {
      name: /create an account/i,
    });

    expect(signUpLabel).not.toBeInTheDocument();

    await user.click(signUpButton);
    const signUpLabelAfterClick = screen.getByRole("heading", {
      name: /create an account/i,
    });
    expect(signUpLabelAfterClick).toBeInTheDocument();
  });
});
