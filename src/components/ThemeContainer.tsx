import { toggleDarkMode } from "domain/slices/settingsSlice";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

function ThemeContainer({ children }: { children: ReactNode }) {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDarkModeChange = () => dispatch(toggleDarkMode());
    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
  }, []);

  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings.darkMode]);

  return <>{children}</>;
}

export default ThemeContainer;
