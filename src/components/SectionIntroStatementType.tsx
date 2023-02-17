import { useState } from "react";
import { Question, Section } from "utils/Types";

const SectionIntroStatementType = ({
  section,
  handleFinishSection,
}: {
  section: Section;
  handleFinishSection: () => void;
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false); // Toggle visibility of the answer choices

  const currentQuestion = section.questions[questionIndex];

  function handleAnswerClick() {
    if (questionIndex !== section.questions.length - 1) {
      setQuestionIndex(prev => prev + 1);
      setShowChoices(false);
    } else {
      handleFinishSection();
    }
  }

  function handleSectionContainerClick() {
    if (!showChoices) {
      setShowChoices(true);
    }
  }

  return (
    <div className="bg-red h-screen border border-dotted" onClick={handleSectionContainerClick}>
      <div>{showChoices ? currentQuestion.question : currentQuestion.statement}</div>
      {showChoices && (
        <div>
          {currentQuestion.choices.map((choice, i) => (
            <button key={i} onClick={handleAnswerClick} className="p-6 border">
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionIntroStatementType;
