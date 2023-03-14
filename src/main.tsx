import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./routes/Landing";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import QuizContainer from "./routes/QuizContainer";
import QuizComplete from "routes/QuizComplete";
import { Provider } from "react-redux";
import { store } from "domain/Store";
import Counter from "routes/Counter";

// JSX syntax to define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/quiz" element={<QuizContainer />} />
      <Route path="/quiz-complete" element={<QuizComplete />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
