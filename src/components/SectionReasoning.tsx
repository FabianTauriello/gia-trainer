import { Section } from "domain/Types";
import { useState } from "react";
import useSection from "hooks/useSection";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionIntroStatementType({
  section,
  handleFinishSection,
}: {
  section: Section;
  handleFinishSection: (score: number) => void;
}) {
  const [hideChoices, setHideChoices] = useState(true); // Toggle visibility of the answer choices
  const [currentQuestion, handleAnswerClick] = useSection(section.questions, handleFinishSection, () => setHideChoices(true));

  function handleSectionContainerClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (hideChoices) {
      setHideChoices(false);
    }
  }

  return (
    <SectionContainer onClickCapture={(e) => (hideChoices ? handleSectionContainerClick(e) : undefined)}>
      <div className="bg-cream text-black mx-14 p-10 rounded-lg text-lg text-center mb-6">
        {hideChoices ? currentQuestion.statement : currentQuestion.question}
      </div>
      {
        <Choices
          correctChoice={currentQuestion.correctChoiceIndex}
          choices={currentQuestion.choices}
          handleAnswerClick={handleAnswerClick}
          hideChoices={hideChoices}
        />
      }
    </SectionContainer>
  );
}

export default SectionIntroStatementType;
