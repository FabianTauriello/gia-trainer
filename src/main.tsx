import ReactDOM from "react-dom/client";
import AppRouter from "AppRouter";
import { Provider } from "react-redux";
import { store } from "domain/Store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
