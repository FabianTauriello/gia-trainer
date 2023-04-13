import { useAppSelector } from "hooks/useAppSelector";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import Landing from "./routes/Landing";
import { store } from "domain/Store";
import { Provider } from "react-redux";
import QuizWrapper from "routes/QuizWrapper";
import Counter from "routes/Counter";
import QuizReview from "routes/QuizReview";

function AppRouter() {
  const quiz = useAppSelector((state) => state.quiz);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="/counter" element={<Counter />} />
        {/* Private user routes */}
        {/* <Route path="/dashboard/quiz/:quizId" element={<QuizWrapper />} /> */}
        {/* <Route path="/dashboard/quiz/:quizId/review" element={<QuizReview />} /> */}
        {/* Public visitor routes. 'quizId' should be 'visitor' here */}
        <Route path="/quiz/:quizId" element={<QuizWrapper />} />
        <Route path="/quiz/:quizId/review" element={quiz.attempts.length ? <QuizReview /> : <Navigate to="/quiz/visitor" />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
