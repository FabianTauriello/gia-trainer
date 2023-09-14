import { render, screen } from "@testing-library/react";
import { ThemeContainer } from "components/ThemeContainer";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "domain/store";
import { Provider } from "react-redux";
import { AppRouter } from "AppRouter";
import { TestComponent } from "./TestComponent";

test("sign-in", () => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContainer>
          <AppRouter />
        </ThemeContainer>
      </PersistGate>
    </Provider>
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("");
});

test("TestComponent", () => {
  render(<TestComponent />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello World");
});
