import { ReactNode } from "react";

// like Btn1 but it renders children - good for spinners/async logic
export function SpinnerButton({
  children,
  handleClick,
  customCss,
}: {
  children: ReactNode;
  handleClick: () => void;
  customCss: string;
}) {
  return (
    <button
      type="button"
      className={`cursor-pointer select-none rounded-lg p-4 font-bold transition-transform hover:scale-105 ${customCss}`}
    >
      {children}
    </button>
  );
}
