import { QuizAttempt } from "domain/types";
import { Dispatch, ReactNode, createContext, useState } from "react";

type DashboardContextType = {
  activeAttempt: QuizAttempt | null;
  setActiveAttempt: Dispatch<React.SetStateAction<QuizAttempt | null>>;
};

export const DashboardContext = createContext({} as DashboardContextType);

export function DashboardContextProvider({ children }: { children: ReactNode }) {
  const [activeAttempt, setActiveAttempt] = useState<QuizAttempt | null>(null);

  const value = { activeAttempt, setActiveAttempt };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
