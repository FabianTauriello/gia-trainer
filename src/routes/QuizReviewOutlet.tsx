import { useAppSelector } from "hooks/useAppSelector";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function QuizReviewOutlet() {
  const latestAttempt = useAppSelector((state) => state.latestAttempt);
  const location = useLocation();

  return latestAttempt.value ? <Outlet /> : <Navigate to="/quiz" state={{ from: location }} />;
}
