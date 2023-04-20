import { useContext, useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import Choices from "./Choices";
import QuestionContainer from "./QuestionContainer";
import { Question } from "domain/Types";
import { QuizContext } from "domain/QuizContextProvider";

function QuestionReasoning({}: {}) {
  const { currentQuestion, quizContext, setQuizContext, inReview } = useContext(QuizContext);

  const [hideChoices, setHideChoices] = useState(true); // Toggle visibility of the answer choices

  function handleSectionContainerClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (hideChoices) {
      setHideChoices(false);
    }
  }

  function handleAnswerClick(num: number) {
    if (inReview) return;

    setQuizContext((prev) => ({ ...prev, questionIndex: prev.questionIndex + 1 }));
    setHideChoices(true);
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
    <QuestionContainer onClickCapture={(e) => (hideChoices ? handleSectionContainerClick(e) : undefined)}>
      <div className="bg-cream text-black mx-14 p-10 rounded-lg text-lg text-center mb-6">{getTextToDisplay()}</div>
      {<Choices hideChoices={hideChoices} customAnswerHandler={(i) => handleAnswerClick(i)} />}
    </QuestionContainer>
  );
}

export default QuestionReasoning;
