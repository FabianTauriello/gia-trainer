import { Section } from "domain/Types";
import useSection from "hooks/useSection";
import Choices from "./Choices";
import SectionContainer from "./SectionContainer";

function SectionWordMeaning({
  section,
  handleFinishSection,
}: {
  section: Section;
  handleFinishSection: (score: number) => void;
}) {
  const [currentQuestion, handleAnswerClick] = useSection(section.questions, handleFinishSection);

  return (
    <SectionContainer>
      <Choices
        correctChoice={currentQuestion.correctChoiceIndex}
        choices={currentQuestion.choices}
        handleAnswerClick={handleAnswerClick}
      />
    </SectionContainer>
  );
}

export default SectionWordMeaning;
