import { current } from "@reduxjs/toolkit";
import { QuizContext } from "domain/QuizContextProvider";
import { useAppSelector } from "hooks/useAppSelector";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Choices({
  hideChoices = false,
  customAnswerHandler,
}: {
  hideChoices?: boolean;
  customAnswerHandler?: (num: number) => void;
}) {
  const navigate = useNavigate();

  const { currentQuestion, quizContext, setQuizContext, inReview, allQuestions } = useContext(QuizContext);

  // TODO not great that I'm duplicating code here and in choices component
  function handleAnswerClick(num: number) {
    if (inReview) return;
    if (quizContext.questionIndex === allQuestions.length - 1) {
      const loggedIn = false;
      navigate(loggedIn ? `dashboard/quiz/someId/review` : `/quiz/visitor/review`);
    }

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
            currentQuestion.correctChoiceIndex === i ? "border-4 border-white" : ""
          }`}
        >
          <span className={`${!hideChoices || inReview ? "visible" : "invisible"}`}>{choice}</span>
        </button>
      ))}
    </div>
  );
}

export default Choices;
