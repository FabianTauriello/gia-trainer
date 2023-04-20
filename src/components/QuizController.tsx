import { useContext, useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { useNavigate, useParams } from "react-router-dom";
import {} from "domain/slices/quizSlice";
import SectionIntro from "components/SectionIntro";
import { QuizContext } from "domain/QuizContextProvider";
import QuestionReasoning from "./QuestionReasoning";
import QuestionPerceptualSpeed from "./QuestionPerceptualSpeed";
import QuestionWordMeaning from "./QuestionWordMeaning";
import QuestionNumberSpeedAndAccuracy from "./QuestionNumberSpeedAndAccuracy";
import QuestionSpatialVisualisation from "./QuestionSpatialVisualisation";

// TODO possible merge with <QuizWrapper />
function QuizController() {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const { currentQuestion, quizContext, inReview } = useContext(QuizContext);

  function getQuestionType() {
    switch (currentQuestion.section) {
      case "Reasoning":
        return <QuestionReasoning />;
      case "Perceptual Speed":
        return <QuestionPerceptualSpeed />;
      case "Number Speed and Accuracy":
        return <QuestionNumberSpeedAndAccuracy />;
      case "Word Meaning":
        return <QuestionWordMeaning />;
      case "Spatial Visualisation":
        return <QuestionSpatialVisualisation />;
      default:
        throw new Error(`A component for a ${currentQuestion.section} question does not exist.`);
    }
  }

  if (!inReview && !quizContext.sectionsStarted.includes(currentQuestion.section)) {
    return <SectionIntro />;
  }

  return getQuestionType();
}

export default QuizController;
