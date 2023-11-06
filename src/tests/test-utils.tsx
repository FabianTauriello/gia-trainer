import React from "react";
import { render } from "@testing-library/react";
import { store, persistor } from "../domain/store";
import { Provider } from "react-redux";

import { ThemeContainer } from "components/common/ThemeContainer";
import { PersistGate } from "redux-persist/integration/react";
import { MemoryRouter, Router } from "react-router-dom";

interface RenderOptions {
  initialState?: Record<string, unknown>; // You can customize the initial state if needed
}

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const { initialState } = options;

  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MemoryRouter>
          <ThemeContainer>{ui}</ThemeContainer>
        </MemoryRouter>
      </PersistGate>
    </Provider>
  );
};

export * from "@testing-library/react";
export { customRender };
