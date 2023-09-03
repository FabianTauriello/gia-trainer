import { useAppSelector } from "hooks/useAppSelector";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function QuizReviewOutlet() {
  const latestAttempt = useAppSelector((state) => state.latestAttempt);
  const location = useLocation();

  console.log("location: ", location);

  return latestAttempt.value ? <Outlet /> : <Navigate to="/quiz" state={{ from: location }} />;
}
