import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {} from "domain/slices/quizSlice";
import { CategoryIntro } from "components/CategoryIntro";
import { QuizContext } from "domain/QuizContextProvider";
import { QuestionReasoning } from "./QuestionReasoning";
import { QuestionPerceptualSpeed } from "./QuestionPerceptualSpeed";
import { QuestionWordMeaning } from "./QuestionWordMeaning";
import { QuestionNumberSpeedAndAccuracy } from "./QuestionNumberSpeedAndAccuracy";
import { QuestionSpatialVisualisation } from "./QuestionSpatialVisualisation";

// TODO possible merge with <QuizWrapper /> OR rename
export function QuestionController() {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const { currentQuestion, categoriesStarted, inReview } = useContext(QuizContext);

  function getQuestionType() {
    switch (currentQuestion.category) {
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
        throw new Error(`A component for a ${currentQuestion.category} question does not exist.`);
    }
  }

  if (!inReview && !categoriesStarted.includes(currentQuestion.category)) {
    return <CategoryIntro />;
  }

  return getQuestionType();
}
