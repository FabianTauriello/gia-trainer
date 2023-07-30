import { useAppSelector } from "hooks/useAppSelector";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate, redirect } from "react-router-dom";
import { Landing } from "./routes/Landing";
import { QuizAttemptWrapper } from "routes/QuizAttemptWrapper";
import { Counter } from "routes/Counter";
import { QuizReview } from "routes/QuizReview";
import { SignIn } from "routes/SignIn";
import { PrivateOutlet } from "routes/PrivateOutlet";
import { PageNotFound } from "routes/PageNotFound";
import { QuizReviewAndPost } from "routes/QuizReviewAndPost";
import { Settings } from "components/Settings";
import { DashboardOverview } from "components/DashboadOverview";
import { Leaderboard } from "components/Leaderboard";
import { Dashboard } from "routes/Dashboard";
import { Attempts } from "components/Attempts";

export function AppRouter() {
  const { quiz, auth } = useAppSelector((state) => state);

  // TODO don't separate this function?
  function determineReviewRoute() {
    if (auth.user && quiz.latestAttempt && quiz.latestAttempt.id === "") {
      return <QuizReviewAndPost />;
    } else {
      return <QuizReview />;
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/sign-in" element={auth.user ? <Navigate to={"/dashboard"} replace /> : <SignIn />} />
        <Route path="/quiz/" element={<QuizAttemptWrapper />} />
        <Route path="/quiz/review" element={determineReviewRoute()} />
        {/* private routes */}
        <Route path="/" element={<PrivateOutlet />}>
          {/* TODO index routes explained here: https://www.youtube.com/watch?v=V6zLjVPKtAo */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index path="/dashboard" element={<DashboardOverview />} />
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
