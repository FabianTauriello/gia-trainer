import { useAppSelector } from "hooks/useAppSelector";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import Landing from "./routes/Landing";
import { store } from "domain/Store";
import { Provider } from "react-redux";
import QuizContainer from "routes/QuizContainer";
import Counter from "routes/Counter";
import QuizReview from "routes/QuizReview";

function AppRouter() {
  const quizAttempts = useAppSelector((state) => state.quizAttempts);
  // const existingAttempt = quizAttempts.attempts.length;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="/counter" element={<Counter />} />
        {/* Private user routes */}
        {/* <Route path="/dashboard/quiz/:quizId" element={<QuizContainer />} /> */}
        {/* <Route path="/dashboard/quiz/:quizId/review" element={<QuizReview />} /> */}
        {/* Public visitor routes. 'quizId' should be 'visitor' here */}
        <Route path="/quiz/:quizId" element={<QuizContainer />} />
        {/* TODO check if there is a quiz attempt before showing quiz review */}
        <Route path="/quiz/:quizId/review" element={quizAttempts.attempts.length ? <QuizReview /> : <Navigate to="/quiz/visitor" />} />
        {/* <Route path="/quiz/:quizId/review" element={<QuizReview />} /> */}
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
