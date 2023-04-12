import { Section } from "domain/Types";
import { useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import useSection from "hooks/useSection";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionReasoning({
  section,
  handleFinishSection,
  startingQuestionIndex = 0,
}: {
  section: Section;
  handleFinishSection: (score: number) => void;
  startingQuestionIndex?: number;
}) {
  const quiz = useAppSelector((state) => state.quiz);

  const [hideChoices, setHideChoices] = useState(true); // Toggle visibility of the answer choices
  const [currentQuestion, handleAnswerClick] = useSection(section.questions, startingQuestionIndex, handleFinishSection, () =>
    setHideChoices(true)
  );

  function handleSectionContainerClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (hideChoices) {
      setHideChoices(false);
    }
  }

  function getTextToDisplay() {
    if (quiz.inReview)
      return (
        <>
          <span className="block">{currentQuestion.statement}</span>
          <span className="block">{currentQuestion.question}</span>
        </>
      );

    return <span>{hideChoices ? currentQuestion.statement : currentQuestion.question}</span>;
  }

  return (
    <SectionContainer onClickCapture={(e) => (hideChoices ? handleSectionContainerClick(e) : undefined)}>
      <div className="bg-cream text-black mx-14 p-10 rounded-lg text-lg text-center mb-6">{getTextToDisplay()}</div>
      {
        <Choices
          correctChoice={currentQuestion.correctChoiceIndex}
          choices={currentQuestion.choices}
          handleAnswerClick={handleAnswerClick}
          hideChoices={hideChoices}
        />
      }
    </SectionContainer>
  );
}

export default SectionReasoning;
