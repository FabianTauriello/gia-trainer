import { Section } from "domain/Types";
import useSection from "hooks/useSection";
import { useState } from "react";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionPerceptualSpeed({
  section,
  handleFinishSection,
}: {
  section: Section;
  handleFinishSection: (score: number) => void;
}) {
  const [currentQuestion, handleAnswerClick] = useSection(section.questions, handleFinishSection);

  return (
    <SectionContainer>
      <div className="flex justify-center mb-6 gap-5 text-center">
        {currentQuestion.pairs?.map((pair, i) => {
          return (
            <div key={i} className="text-7xl text-cream font-medium">
              <div className="mb-2">{pair[0]}</div>
              <div className="mt-2">{pair[1]}</div>
            </div>
          );
        })}
      </div>
      <Choices
        correctChoice={currentQuestion.correctChoiceIndex}
        choices={currentQuestion.choices}
        handleAnswerClick={handleAnswerClick}
      />
    </SectionContainer>
  );
}

export default SectionPerceptualSpeed;
