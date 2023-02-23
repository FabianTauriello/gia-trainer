import { Section } from "domain/Types";
import { useState } from "react";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionIntroStatementType({
  section,
  handleFinishSection,
}: {
  section: Section;
  handleFinishSection: (score: number) => void;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false); // Toggle visibility of the answer choices

  const currentQuestion = section.questions[questionIndex];

  function handleAnswerClick() {
    if (questionIndex !== section.questions.length - 1) {
      setQuestionIndex(prev => prev + 1);
      setShowChoices(false);
    } else {
      handleFinishSection(0);
    }
  }

  function handleSectionContainerClick() {
    if (!showChoices) {
      setShowChoices(true);
    }
  }

  return (
    <SectionContainer onClick={handleSectionContainerClick}>
      <div className="bg-cream text-black mx-14 p-10 rounded-lg text-lg text-center mb-6">
        {showChoices ? currentQuestion.question : currentQuestion.statement}
      </div>
      {<Choices choices={currentQuestion.choices} handleAnswerClick={handleAnswerClick} showChoices={showChoices} />}
    </SectionContainer>
  );
}

export default SectionIntroStatementType;
