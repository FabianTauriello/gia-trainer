import React, { PropsWithChildren, ReactElement } from "react";
import { render } from "@testing-library/react";
import { store, persistedReducer, rootReducer, persistor } from "../domain/store";
import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import { RootState } from "domain/store";
import { Provider } from "react-redux";
import counterReducer from "../domain/slices/counterSlice";
import latestAttempt from "../domain/slices/latestAttemptSlice";
import auth from "../domain/slices/authSlice";
import settings from "../domain/slices/settingsSlice";
import { ThemeContainer } from "components/common/ThemeContainer";
import { PersistGate } from "redux-persist/integration/react";
import { MemoryRouter, Router } from "react-router-dom";

// interface CustomRenderOptions extends Omit<RenderOptions, "queries"> {
//   preloadedState?: PreloadedState<RootState>;
//   store?: typeof store;
// }

// export function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = configureStore({
//       reducer: persistedReducer,
//       preloadedState,
//     }),
//     ...renderOptions
//   }: CustomRenderOptions
// ) {
//   function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
//     return (
//       <Provider store={store}>
//         {children}
//       </Provider>
//     );
//   }

//   // Return an object with the store and all of RTL's (React Testing Library)
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

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
