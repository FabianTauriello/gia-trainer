import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizCategoryIntro } from "components/QuizCategoryIntro";
import { QuizContext } from "domain/QuizContextProvider";
import { QuestionReasoning } from "./QuestionReasoning";
import { QuestionPerceptualSpeed } from "./QuestionPerceptualSpeed";
import { QuestionWordMeaning } from "./QuestionWordMeaning";
import { QuestionNumberSpeedAndAccuracy } from "./QuestionNumberSpeedAndAccuracy";
import { QuestionSpatialVisualisation } from "./QuestionSpatialVisualisation";

export function QuestionController() {
  const params = useParams<{ quizId: string }>();

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
    return <QuizCategoryIntro />;
  }

  return getQuestionType();
}
