import { Section } from "domain/Types";
import useSection from "hooks/useSection";
import { useEffect, useState } from "react";
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
  const [questionIndex, handleAnswerClick] = useSection(section.questions.length, handleFinishSection, () =>
    setHideChoices(true)
  );

  const currentQuestion = section.questions[questionIndex];

  function handleSectionContainerClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    console.log("section container clicked");
    if (hideChoices) {
      setHideChoices(false);
    }
  }

  return (
    <SectionContainer onClickCapture={e => (hideChoices ? handleSectionContainerClick(e) : undefined)}>
      <div className="bg-cream text-black mx-14 p-10 rounded-lg text-lg text-center mb-6">
        {hideChoices ? currentQuestion.statement : currentQuestion.question}
      </div>
      {<Choices choices={currentQuestion.choices} handleAnswerClick={handleAnswerClick} hideChoices={hideChoices} />}
    </SectionContainer>
  );
}

export default SectionIntroStatementType;
