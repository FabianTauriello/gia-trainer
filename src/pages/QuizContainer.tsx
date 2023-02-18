import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "temp/data.json";
import SectionIntroStatementType from "components/SectionIntroStatementType";
import SectionImageType from "components/SectionImageType";
import SectionChoicesOnlyType from "components/SectionChoicesOnlyType";
import SectionLanding from "components/SectionLanding";

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
        return <SectionIntroStatementType section={currentSection} handleFinishSection={handleFinishSection} />;
      case 1:
      case 4:
        return <SectionImageType section={currentSection} handleFinishSection={handleFinishSection} />;
      case 2:
      case 3:
        return <SectionChoicesOnlyType section={currentSection} handleFinishSection={handleFinishSection} />;
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
