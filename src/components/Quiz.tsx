import { useState } from "react";
import { Section } from "domain/Types";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useNavigate, useParams } from "react-router-dom";
import { setSectionScoreForQuizAttempt, calculateTotalScoreForAttempt } from "domain/slices/quizSlice";
import SectionNumberSpeedAndAccuracy from "components/SectionNumberSpeedAndAccuracy";
import SectionSpatialVisualisation from "components/SectionSpatialVisualisation";
import SectionPerceptualSpeed from "components/SectionPerceptualSpeed";
import SectionWordMeaning from "components/SectionWordMeaning";
import SectionReasoning from "components/SectionReasoning";
import SectionLanding from "components/SectionLanding";

// TODO consider using appselector to get quiz sections insread of passing through as an argument
function Quiz({ sections }: { sections: Section[] }) {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) => state.quiz);

  const [showSectionLanding, setShowSectionLanding] = useState(true);
  const [sectionIndex, setSectionIndex] = useState(0);

  const currentSection = sections[sectionIndex];

  function handleFinishSection(sectionScore: number) {
    dispatch(setSectionScoreForQuizAttempt({ quizId: params.quizId!, sectionIndex: sectionIndex, score: sectionScore }));

    // don't increment index counter past number of sections
    if (sectionIndex !== sections!.length - 1) {
      setShowSectionLanding(true);
      setSectionIndex((prev) => prev + 1);
    } else {
      // Quiz attempt is finished. Calculate total score and navigate to review page
      dispatch(calculateTotalScoreForAttempt({ quizId: params.quizId! }));
      // TODO check if logged in and pass attempt id if true
      const loggedIn = false;
      navigate(loggedIn ? `dashboard/quiz/someId/review` : `/quiz/visitor/review`);
    }
  }

  // Render different section types based on section number
  function renderSection() {
    switch (currentSection.number) {
      case 1:
        return <SectionReasoning section={currentSection} handleFinishSection={(score) => handleFinishSection(score)} />;
      case 2:
        return <SectionPerceptualSpeed section={currentSection} handleFinishSection={(score) => handleFinishSection(score)} />;
      case 3:
        return <SectionNumberSpeedAndAccuracy section={currentSection} handleFinishSection={(score) => handleFinishSection(score)} />;
      case 4:
        return <SectionWordMeaning section={currentSection} handleFinishSection={(score) => handleFinishSection(score)} />;
      case 5:
        return <SectionSpatialVisualisation section={currentSection} handleFinishSection={(score) => handleFinishSection(score)} />;
      default:
        throw new Error(`There is no section container for section ${currentSection.number}.`);
    }
  }

  if (showSectionLanding) {
    return <SectionLanding section={currentSection} handleStartSection={() => setShowSectionLanding(false)} />;
  }

  return renderSection();
}

export default Quiz;
