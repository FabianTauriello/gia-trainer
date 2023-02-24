import { Section } from "domain/Types";
import useSection from "hooks/useSection";
import { useState } from "react";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionWordMeaning({
  section,
  handleFinishSection,
}: {
  section: Section;
  handleFinishSection: (score: number) => void;
}) {
  const [questionIndex, handleAnswerClick] = useSection(section.questions.length, handleFinishSection);
  const currentQuestion = section.questions[questionIndex];

  return (
    <SectionContainer>
      <Choices choices={currentQuestion.choices} handleAnswerClick={handleAnswerClick} />
    </SectionContainer>
  );
}

export default SectionWordMeaning;
