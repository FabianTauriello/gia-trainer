import { Section } from "domain/Types";
import { useState } from "react";
import Choices from "./Choices";

function SectionSpatialVisualisation({
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
    <div className="bg-primary h-screen flex flex-col justify-center align-middle">
      <Choices choices={currentQuestion.choices} handleAnswerClick={handleAnswerClick} />
    </div>
  );
}

export default SectionSpatialVisualisation;
