import { ReactNode, useContext } from "react";
import { QuizContext } from "./QuizContextProvider";

interface QuestionContainerProps {
  onClickCapture?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: ReactNode;
}

export function QuestionContainer({ onClickCapture, children }: QuestionContainerProps) {
  const { inReview } = useContext(QuizContext);
  return (
    <div
      className={`flex flex-col justify-center align-middle px-6 ${inReview ? "h-full" : "h-screen"}`}
      onClickCapture={onClickCapture}
    >
      {children}
    </div>
  );
}
