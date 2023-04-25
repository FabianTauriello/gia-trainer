import { ReactNode } from "react";

// like Btn1 but it renders children - good for spinners/async logic
export function Btn2({ children, handleClick, customCss }: { children: ReactNode; handleClick: () => void; customCss: string }) {
  return (
    <button
      type="button"
      className={`hover:scale-105 transition-transform p-4 rounded-lg cursor-pointer font-bold select-none ${customCss}`}
    >
      {children}
    </button>
  );
}
