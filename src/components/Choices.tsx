import { current } from "@reduxjs/toolkit";
import { QuizContext } from "domain/QuizContextProvider";
import { useAppSelector } from "hooks/useAppSelector";
import { useContext } from "react";

function Choices({
  hideChoices = false,
  customAnswerHandler,
}: {
  hideChoices?: boolean;
  customAnswerHandler?: (num: number) => void;
}) {
  const { currentQuestion, quizContext, setQuizContext, inReview } = useContext(QuizContext);

  function handleAnswerClick(num: number) {
    setQuizContext((prev) => ({ ...prev, questionIndex: prev.questionIndex + 1 }));
  }

  return (
    <div className="flex justify-center gap-3 mx-20">
      {currentQuestion.choices.map((choice, i) => (
        <button
          key={i}
          type="button"
          onClick={customAnswerHandler ? () => customAnswerHandler(i) : () => handleAnswerClick(i)}
          className={`outline-none p-6 bg-secondary rounded-lg flex-1 ${!hideChoices ? "cursor-pointer" : "cursor-default"} ${
            // TODO for testing only, remove later!!!
            currentQuestion.correctChoiceIndex === i ? "border-4 border-white" : ""
          }`}
        >
          <span className={`${!hideChoices ? "visible" : "invisible"}`}>{choice}</span>
        </button>
      ))}
    </div>
  );
}

export default Choices;
