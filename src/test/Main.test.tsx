import { render, screen } from "@testing-library/react";
// import { Landing } from "routes/Landing";
// import { ThemeContainer } from "components/ThemeContainer";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "domain/store";
// import { Provider } from "react-redux";
// import { AppRouter } from "AppRouter";
// import ReactDOM from "react-dom/client";
import { App } from "./app";
// import "./index.css";

// test("sign-in", () => {
//   render(
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <ThemeContainer>
//           <AppRouter />
//         </ThemeContainer>
//       </PersistGate>
//     </Provider>
//   );
//   expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("");
// });

test("sign-in", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("hello world");
});
