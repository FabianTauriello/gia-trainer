import { useAppSelector } from "hooks/useAppSelector";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate, redirect } from "react-router-dom";
import { Landing } from "./routes/Landing";
import { QuizAttemptWrapper } from "routes/QuizAttemptWrapper";
import { Counter } from "routes/Counter";
import { QuizReview } from "routes/QuizReview";
import { SignIn } from "routes/SignIn";
import Dashboard from "routes/Dashboard";
import { PrivateOutlet } from "routes/PrivateOutlet";
import { useAuth } from "hooks/useAuth";
import { User } from "domain/Types";

export function AppRouter() {
  const quiz = useAppSelector((state) => state.quiz);
  const auth = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/sign-in" element={<SignIn />} loader={() => signInLoader(auth.user)} />
        {/* private routes */}
        <Route path="/" element={<PrivateOutlet />}>
          {/* TODO index routes explained here: https://www.youtube.com/watch?v=V6zLjVPKtAo */}
          <Route index path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route path="/dashboard/quiz/:quizId" element={<QuizWrapper />} /> */}
        {/* <Route path="/dashboard/quiz/:quizId/review" element={<QuizReview />} /> */}
        {/* public visitor routes. 'quizId' should be 'visitor' here */}
        <Route path="/quiz/:quizId" element={<QuizAttemptWrapper />} />
        <Route path="/quiz/:quizId/review" element={quiz.attempts.length ? <QuizReview /> : <Navigate to="/quiz/visitor" />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

function signInLoader(user: User | null) {
  if (user) return redirect("/dashboard");
}
