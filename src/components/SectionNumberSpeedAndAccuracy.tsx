import { Section } from "domain/Types";
import useSection from "hooks/useSection";
import { useState } from "react";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionNumberSpeedAndAccuracy({
  section,
  handleFinishSection,
  startingQuestionIndex = 0,
}: {
  section: Section;
  handleFinishSection: (score: number) => void;
  startingQuestionIndex?: number;
}) {
  const [currentQuestion, handleAnswerClick] = useSection(section.questions, startingQuestionIndex, handleFinishSection);

  return (
    <SectionContainer>
      <Choices
        correctChoice={currentQuestion.correctChoiceIndex}
        choices={currentQuestion.choices}
        handleAnswerClick={handleAnswerClick}
      />
    </SectionContainer>
  );
}

export default SectionNumberSpeedAndAccuracy;
