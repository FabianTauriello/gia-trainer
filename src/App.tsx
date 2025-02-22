import ReactDOM from "react-dom/client";
import { AppRouter } from "AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "domain/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeContainer } from "components/common/ThemeContainer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContainer>
        <AppRouter />
      </ThemeContainer>
    </PersistGate>
  </Provider>
);

// TODO add error-boundary
