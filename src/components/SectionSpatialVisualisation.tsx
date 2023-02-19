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
      <div className="flex justify-center mb-6 gap-5 text-center">
        {currentQuestion.letters?.map(letter => {
          const firstLetter = letter[0];
          const secondLetter = letter[1];
          //   TODO using in-line styling here instead of tailwind :(
          return (
            <div className="text-7xl text-black bg-cream p-7 rounded font-semibold">
              <div
                style={{
                  transform: `rotate(${firstLetter.rot}deg) ${firstLetter.flip ? "scale(-1, 1)" : "scale(1, 1)"}`,
                }}
              >
                {firstLetter.char}
              </div>
              <div
                style={{
                  transform: `rotate(${secondLetter.rot}deg) ${secondLetter.flip ? "scale(-1, 1)" : "scale(1, 1)"}`,
                }}
              >
                {secondLetter.char}
              </div>
            </div>
          );
        })}
      </div>
      <Choices choices={currentQuestion.choices} handleAnswerClick={handleAnswerClick} />
    </div>
  );
}

export default SectionSpatialVisualisation;
