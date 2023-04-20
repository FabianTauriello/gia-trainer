import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./routes/Landing";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import QuizContainer from "./routes/QuizAttemptWrapper";
import QuizReview from "routes/QuizReview";
import { Provider } from "react-redux";
import { store } from "domain/Store";
import Counter from "routes/Counter";
import { useAppSelector } from "hooks/useAppSelector";
import App from "AppRouter";
import AppRouter from "AppRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
