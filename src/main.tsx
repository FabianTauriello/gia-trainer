import ReactDOM from "react-dom/client";
import { AppRouter } from "AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "domain/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { ThemeContainer } from "components/ThemeContainer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContainer>
        <AppRouter />
      </ThemeContainer>
    </PersistGate>
  </Provider>
);
