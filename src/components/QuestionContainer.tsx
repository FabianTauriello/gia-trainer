import { QuizContext } from "domain/QuizContextProvider";
import { ReactNode, useContext } from "react";

interface QuestionContainerProps {
  onClickCapture?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: ReactNode;
}

export function QuestionContainer({ onClickCapture, children }: QuestionContainerProps) {
  const { inReview } = useContext(QuizContext);
  return (
    <div
      className={`flex flex-col justify-center bg-primary-500 p-4 align-middle ${inReview ? "h-full" : "h-screen"}`}
      onClickCapture={onClickCapture}
    >
      {children}
    </div>
  );
}
