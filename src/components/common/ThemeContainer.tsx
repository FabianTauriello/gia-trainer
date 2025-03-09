import { selectSettings, setDarkMode } from "domain/slices/settingsSlice";
import { useAppSelector } from "hooks/useAppSelector";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

interface ThemeContainerProps {
  children: ReactNode;
}

export function ThemeContainer({ children }: ThemeContainerProps) {
  const settings = useAppSelector(selectSettings);
  const dispatch = useDispatch();

  useEffect(() => {
    // Setup listener for changes to system preferences
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDarkModeChange = () => dispatch(setDarkMode(darkModeMediaQuery.matches));
    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
  }, []);

  useEffect(() => {
    // Set theme on first mount
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0f172a"; // bg-slate-900
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#e2e8f0"; // bg-slate-200
    }
  }, [settings.darkMode]);

  return <>{children}</>;
}
