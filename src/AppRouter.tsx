import { useAppSelector } from "hooks/useAppSelector";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate, redirect } from "react-router-dom";
import { Landing } from "./routes/Landing";
import { QuizAttemptWrapper } from "routes/QuizAttemptWrapper";
import { Counter } from "routes/Counter";
import { SignIn } from "routes/SignIn";
import { PrivateOutlet } from "routes/PrivateOutlet";
import { PageNotFound } from "routes/PageNotFound";
import { Overview } from "components/dashboard/Overview";
import { Dashboard } from "routes/Dashboard";
import { Settings } from "components/dashboard/Settings";
import { Attempts } from "components/dashboard/Attempts";
import { Leaderboard } from "components/dashboard/Leaderboard";
import { QuizReviewOutlet } from "routes/QuizReviewOutlet";
import { QuizReviewWrapper } from "routes/QuizReviewWrapper";

export function AppRouter() {
  const { auth } = useAppSelector((state) => state);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/sign-in" element={auth.user ? <Navigate to={"/dashboard"} replace /> : <SignIn />} />
        <Route path="/quiz/" element={<QuizAttemptWrapper />} />
        <Route path="/quiz/review" element={<QuizReviewOutlet />}>
          <Route path="/quiz/review" element={<QuizReviewWrapper />} />
        </Route>
        {/* Private routes */}
        <Route path="/" element={<PrivateOutlet />}>
          {/* TODO index routes explained here: https://www.youtube.com/watch?v=V6zLjVPKtAo */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index path="/dashboard" element={<Overview />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/attempts" element={<Attempts />} />
            <Route path="/dashboard/leaderboard" element={<Leaderboard />} />
          </Route>
          {/* <Route path="/dashboard/quiz/:quizId" element={<QuizWrapper />} /> */}
          {/* <Route path="/dashboard/quiz/:quizId/review" element={<QuizReview />} /> */}
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
