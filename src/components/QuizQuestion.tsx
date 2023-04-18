import { Question } from "domain/Types";
import { ReactNode } from "react";
import QuestionReasoning from "./QuestionReasoning";

function QuizQuestion({ question, handleAnswerClick }: { question: Question; handleAnswerClick?: () => void }) {
  function getQuestionType() {
    let childNode: ReactNode;

    switch (question.section) {
      case "Reasoning":
        return <QuestionReasoning question={question} handleAnswerClick={() => {}} />;
      case "Perceptual Speed":
        return <div />;
      case "Number Speed and Accuracy":
        return <div />;
      case "Word Meaning":
        return <div />;
      case "Spatial Visualisation":
        return <div />;
      default:
        throw new Error(`A component for a ${question.section} question does not exist.`);
    }
  }

  return getQuestionType();
}

export default QuizQuestion;
