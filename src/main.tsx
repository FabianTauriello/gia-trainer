import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizLanding from "./pages/QuizLanding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz-landing",
    element: <QuizLanding />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
