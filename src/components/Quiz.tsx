import { Section } from "domain/Types";
import { useState } from "react";
import { useAppDispatch } from "hooks/useAppSelector";
import { useNavigate, useParams } from "react-router-dom";
import { setSectionScore, calculateTotalScoreForAttempt } from "domain/slices/quizAttemptsSlice";
import SectionReasoning from "components/SectionReasoning";
import SectionPerceptualSpeed from "components/SectionPerceptualSpeed";
import SectionLanding from "components/SectionLanding";
import SectionNumberSpeedAndAccuracy from "components/SectionNumberSpeedAndAccuracy";
import SectionWordMeaning from "components/SectionWordMeaning";
import SectionSpatialVisualisation from "components/SectionSpatialVisualisation";

const Quiz = ({ sections }: { sections: Section[] }) => {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showSectionLanding, setShowSectionLanding] = useState(true);
  const [sectionIndex, setSectionIndex] = useState(0);

  const currentSection = sections[sectionIndex];

  function handleFinishSection(sectionScore: number) {
    dispatch(setSectionScore({ quizId: params.quizId!, sectionIndex: sectionIndex, score: sectionScore }));

    // don't increment index counter past number of sections
    if (sectionIndex !== sections!.length - 1) {
      setShowSectionLanding(true);
      setSectionIndex(prev => prev + 1);
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
};

export default Quiz;
