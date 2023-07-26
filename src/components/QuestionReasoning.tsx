import { useContext, useState } from "react";
import { QuizContext } from "components/QuizContextProvider";
import { useNavigate } from "react-router-dom";
import { Choices } from "./Choices";
import { QuestionContainer } from "./QuestionContainer";

export function QuestionReasoning() {
  const navigate = useNavigate();

  const { currentQuestion, setQuestionIndex, inReview, hideChoices, setHideChoices } = useContext(QuizContext);

  function handleCategoryContainerClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (hideChoices) {
      setHideChoices(false);
    }
  }

  function getTextToDisplay() {
    if (inReview)
      return (
        <>
          <span className="block">{currentQuestion.statement}</span>
          <span className="block">{currentQuestion.question}</span>
        </>
      );

    return <span>{hideChoices ? currentQuestion.statement : currentQuestion.question}</span>;
  }

  return (
    <QuestionContainer onClickCapture={(e) => (hideChoices ? handleCategoryContainerClick(e) : undefined)}>
      <div className="mb-6 rounded-lg dark:bg-white select-none text-white bg-slate-900 text-center dark:text-black text-lg py-10">
        {getTextToDisplay()}
      </div>
      <Choices />
    </QuestionContainer>
  );
}
