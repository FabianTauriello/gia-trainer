import { useAuth } from "hooks/useAuth";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function PrivateOutlet() {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? <Outlet /> : <Navigate to="/sign-in" state={{ from: location }} />;
}
