import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./routes/Landing";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import QuizContainer from "./routes/QuizContainer";
import QuizReview from "routes/QuizReview";
import { Provider } from "react-redux";
import { store } from "domain/Store";
import Counter from "routes/Counter";

// JSX syntax to define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/counter" element={<Counter />} />
      {/* Private user routes */}
      {/* <Route path="/dashboard/quiz" element={<QuizContainer />} /> */}
      {/* <Route path="/dashboard/quiz/review/:id" element={<QuizReview />} /> */}
      {/* Public visitor routes */}
      <Route path="/quiz" element={<QuizContainer />} />
      <Route path="/quiz/review" element={<QuizReview />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
