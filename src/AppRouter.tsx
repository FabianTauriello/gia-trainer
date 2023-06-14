import { useAppSelector } from "hooks/useAppSelector";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate, redirect } from "react-router-dom";
import { Landing } from "./routes/Landing";
import { QuizAttemptWrapper } from "routes/QuizAttemptWrapper";
import { Counter } from "routes/Counter";
import { QuizReview } from "routes/QuizReview";
import { SignIn } from "routes/SignIn";
import Dashboard from "routes/Dashboard";
import { PrivateOutlet } from "routes/PrivateOutlet";
import { PageNotFound } from "routes/PageNotFound";

export function AppRouter() {
  const { quiz, auth } = useAppSelector((state) => state);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/sign-in" element={auth.user ? <Navigate to={"/dashboard"} replace /> : <SignIn />} />
        <Route path="/quiz/" element={<QuizAttemptWrapper />} />
        <Route path="/quiz/review" element={<QuizReview />} />
        {/* private routes */}
        <Route path="/" element={<PrivateOutlet />}>
          {/* TODO index routes explained here: https://www.youtube.com/watch?v=V6zLjVPKtAo */}
          <Route index path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard/quiz/:quizId" element={<QuizWrapper />} /> */}
          {/* <Route path="/dashboard/quiz/:quizId/review" element={<QuizReview />} /> */}
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
