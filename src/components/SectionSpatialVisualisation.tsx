import { Section } from "domain/Types";
import useSection from "hooks/useSection";
import { useState } from "react";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionSpatialVisualisation({
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
      <div className="flex justify-center mb-6 gap-5 text-center">
        {currentQuestion.letters?.map((letter, i) => {
          const firstLetter = letter[0];
          const secondLetter = letter[1];
          //   TODO using in-line styling here instead of tailwind :(
          return (
            <div key={i} className="text-7xl text-black bg-cream p-7 rounded font-medium">
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
    </SectionContainer>
  );
}

export default SectionSpatialVisualisation;
