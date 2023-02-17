import { useState } from "react";
import { Section } from "utils/Types";

const SectionImageType = ({ section, handleFinishSection }: { section: Section; handleFinishSection: () => void }) => {
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
    <div className="bg-red h-screen border border-dotted">
      <img src={currentQuestion.img} alt="question image" />
      <div>
        {currentQuestion.choices.map((choice, i) => (
          <button key={i} onClick={handleAnswerClick} className="p-6 border">
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionImageType;
