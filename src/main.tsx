import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizContainer from "./pages/QuizContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/quiz",
    element: <QuizContainer />,
  },
  {
    path: "/:section",
    element: <QuizContainer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
