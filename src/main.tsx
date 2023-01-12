import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Landing from "./pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizSectionContainer from "./pages/QuizSectionContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:section",
    element: <QuizSectionContainer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
