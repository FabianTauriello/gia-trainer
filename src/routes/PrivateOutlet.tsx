import { useAppSelector } from "hooks/useAppSelector";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function PrivateOutlet() {
  const auth = useAppSelector((state) => state.auth);
  const location = useLocation();

  return auth.user ? <Outlet /> : <Navigate to="/sign-in" state={{ from: location }} />;
}
