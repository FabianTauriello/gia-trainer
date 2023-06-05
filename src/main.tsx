import ReactDOM from "react-dom/client";
import { AppRouter } from "AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "domain/Store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
