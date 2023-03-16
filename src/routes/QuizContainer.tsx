import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionReasoning from "components/SectionReasoning";
import SectionPerceptualSpeed from "components/SectionPerceptualSpeed";
import SectionLanding from "components/SectionLanding";
import SectionNumberSpeedAndAccuracy from "components/SectionNumberSpeedAndAccuracy";
import SectionWordMeaning from "components/SectionWordMeaning";
import SectionSpatialVisualisation from "components/SectionSpatialVisualisation";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { calculateTotalScore, incrementSectionScore } from "domain/slices/quizAttemptSlice";

function QuizContainer() {
  const navigate = useNavigate();

  const [sectionIndex, setSectionIndex] = useState(0);
  const [showSectionLanding, setShowSectionLanding] = useState(true);

  const sections = useAppSelector(state => state.quizAttempt.sections);
  const dispatch = useAppDispatch();

  const currentSection = sections[sectionIndex];

  function handleFinishSection(sectionScore: number) {
    dispatch(incrementSectionScore({ sectionIndex: sectionIndex, score: sectionScore }));

    // don't increment index counter past number of sections
    if (sectionIndex !== sections.length - 1) {
      setShowSectionLanding(true);
      setSectionIndex(prev => prev + 1);
    } else {
      // finished quiz
      dispatch(calculateTotalScore());
      navigate(`/quiz-complete`);
    }
  }

  // Render different section types based on section index
  function renderSection() {
    switch (currentSection.number) {
      case 1:
        return <SectionReasoning section={currentSection} handleFinishSection={score => handleFinishSection(score)} />;
      case 2:
        return (
          <SectionPerceptualSpeed section={currentSection} handleFinishSection={score => handleFinishSection(score)} />
        );
      case 3:
        return (
          <SectionNumberSpeedAndAccuracy
            section={currentSection}
            handleFinishSection={score => handleFinishSection(score)}
          />
        );
      case 4:
        return (
          <SectionWordMeaning section={currentSection} handleFinishSection={score => handleFinishSection(score)} />
        );
      case 5:
        return (
          <SectionSpatialVisualisation
            section={currentSection}
            handleFinishSection={score => handleFinishSection(score)}
          />
        );
      default:
        throw new Error(`There is no section container for section ${currentSection.number}.`);
    }
  }

  if (showSectionLanding) {
    return <SectionLanding section={currentSection} handleStartSection={() => setShowSectionLanding(false)} />;
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
