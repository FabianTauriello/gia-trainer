import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./routes/Landing";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import QuizContainer from "./routes/QuizContainer";

// object syntax to define routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,
//   },
//   {
//     path: "/quiz",
//     element: <QuizContainer />,
//   },
//   {
//     path: "/:section",
//     element: <QuizContainer />,
//   },
// ]);

// JSX syntax to define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/quiz" element={<QuizContainer />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
