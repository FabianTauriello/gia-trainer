import { QuizContext } from "domain/QuizContextProvider";
import { ReactNode, useContext } from "react";

export function QuestionContainer({
  onClickCapture,
  children,
}: {
  onClickCapture?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: ReactNode;
}) {
  const { inReview } = useContext(QuizContext);
  return (
    <div
      className={`bg-primary flex flex-col justify-center align-middle ${inReview ? "h-full" : "h-screen"}`}
      onClickCapture={onClickCapture}
    >
      {children}
    </div>
  );
}
