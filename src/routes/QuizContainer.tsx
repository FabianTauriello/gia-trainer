import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "temp/questions.json";
import SectionReasoning from "components/SectionReasoning";
import SectionPerceptualSpeed from "components/SectionPerceptualSpeed";
import SectionLanding from "components/SectionLanding";
import SectionNumberSpeedAndAccuracy from "components/SectionNumberSpeedAndAccuracy";
import SectionWordMeaning from "components/SectionWordMeaning";
import SectionSpatialVisualisation from "components/SectionSpatialVisualisation";

function QuizContainer() {
  const navigate = useNavigate();

  const [sectionIndex, setSectionIndex] = useState(0);
  const [showSectionLanding, setShowSectionLanding] = useState(true);

  // Use useRef here because I don't need to re-render component as score is updated
  const quizScore = useRef(0);

  const currentSection = data.sections[sectionIndex];

  if (showSectionLanding) {
    return <SectionLanding section={currentSection} handleStartSection={() => setShowSectionLanding(false)} />;
  }

  function handleFinishSection(sectionScore: number) {
    console.log("section finished with score: ", sectionScore);

    quizScore.current += sectionScore;

    // don't increment index counter past number of sections
    if (sectionIndex !== data.sections.length - 1) {
      setShowSectionLanding(true);
      setSectionIndex(prev => prev + 1);
    } else {
      console.log("finished quiz");
      navigate(`/quiz-complete`);
    }
  }

  // Render different section types based on section index
  function renderSection() {
    switch (sectionIndex) {
      case 0:
        return <SectionReasoning section={currentSection} handleFinishSection={score => handleFinishSection(score)} />;
      case 1:
        return (
          <SectionPerceptualSpeed section={currentSection} handleFinishSection={score => handleFinishSection(score)} />
        );
      case 2:
        return (
          <SectionNumberSpeedAndAccuracy
            section={currentSection}
            handleFinishSection={score => handleFinishSection(score)}
          />
        );
      case 3:
        return (
          <SectionWordMeaning section={currentSection} handleFinishSection={score => handleFinishSection(score)} />
        );
      case 4:
        return (
          <SectionSpatialVisualisation
            section={currentSection}
            handleFinishSection={score => handleFinishSection(score)}
          />
        );
      default:
        throw new Error(`There is no section container for section index ${sectionIndex}.`);
    }
  }

  return renderSection();
}

export default QuizContainer;

// section has an array of questions
// each question has:
// - the question text
// - the question prompt
// - an array of choices

// different types of sections:
// - statement, then REPLACED by a question and multiple choices (section 1)
// - picture and multiple choices (sections 2 and 5)
// - choices only (after slight delay) (sections 3 and 4)
