import { useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import useSection from "hooks/useSection";
import Choices from "./Choices";
import QuestionContainer from "./QuestionContainer";
import { Question } from "domain/Types";

function QuestionReasoning({ question, handleAnswerClick }: { question: Question; handleAnswerClick: (score: number) => void }) {
  const quiz = useAppSelector((state) => state.quiz);

  const [hideChoices, setHideChoices] = useState(true); // Toggle visibility of the answer choices

  function handleSectionContainerClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (hideChoices) {
      setHideChoices(false);
    }
  }

  function getTextToDisplay() {
    if (!quiz.activeAttempt)
      return (
        <>
          <span className="block">{question.statement}</span>
          <span className="block">{question.question}</span>
        </>
      );

    return <span>{hideChoices ? question.statement : question.question}</span>;
  }

  return (
    <QuestionContainer onClickCapture={(e) => (hideChoices ? handleSectionContainerClick(e) : undefined)}>
      <div className="bg-cream text-black mx-14 p-10 rounded-lg text-lg text-center mb-6">{getTextToDisplay()}</div>
      {
        <Choices
          correctChoice={question.correctChoiceIndex}
          choices={question.choices}
          handleAnswerClick={handleAnswerClick}
          hideChoices={hideChoices}
        />
      }
    </QuestionContainer>
  );
}

export default QuestionReasoning;
