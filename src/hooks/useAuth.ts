import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);

  return useMemo(() => ({ user }), [user]);
};
