import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "temp/data.json";
import SectionReasoning from "components/SectionReasoning";
import SectionPerceptualSpeed from "components/SectionPerceptualSpeed";
import SectionLanding from "components/SectionLanding";
import SectionNumberSpeedAndAccuracy from "components/SectionNumberSpeedAndAccuracy";
import SectionWordMeaning from "components/SectionWordMeaning";
import SectionSpatialVisualisation from "components/SectionSpatialVisualisation";

function QuizContainer() {
  const navigate = useNavigate();

  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionHasStarted, setSectionHasStarted] = useState(false);

  const currentSection = data.sections[sectionIndex];

  if (!sectionHasStarted) {
    return <SectionLanding section={currentSection} handleStartSection={() => setSectionHasStarted(true)} />;
  }

  function handleFinishSection() {
    setSectionHasStarted(false);

    // don't increment index counter past number of sections
    if (sectionIndex !== data.sections.length - 1) {
      setSectionIndex(prev => prev + 1);
    } else {
      // TODO finished quiz, show results page?
      console.log("finished quiz");
    }
  }

  // Render different section types based on section number
  function renderSection() {
    switch (sectionIndex) {
      case 0:
        return <SectionReasoning section={currentSection} handleFinishSection={handleFinishSection} />;
      case 1:
        return <SectionPerceptualSpeed section={currentSection} handleFinishSection={handleFinishSection} />;
      case 4:
        return <SectionNumberSpeedAndAccuracy section={currentSection} handleFinishSection={handleFinishSection} />;
      case 2:
        return <SectionWordMeaning section={currentSection} handleFinishSection={handleFinishSection} />;
      case 3:
        return <SectionSpatialVisualisation section={currentSection} handleFinishSection={handleFinishSection} />;
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
