import { Section } from "domain/Types";
import { useState } from "react";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionNumberSpeedAndAccuracy({
  section,
  handleFinishSection,
}: {
  section: Section;
  handleFinishSection: () => void;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = section.questions[questionIndex];

  function handleAnswerClick() {
    if (questionIndex !== section.questions.length - 1) {
      setQuestionIndex(prev => prev + 1);
    } else {
      handleFinishSection();
    }
  }

  return (
    <SectionContainer>
      <Choices choices={currentQuestion.choices} handleAnswerClick={handleAnswerClick} />
    </SectionContainer>
  );
}

export default SectionNumberSpeedAndAccuracy;
