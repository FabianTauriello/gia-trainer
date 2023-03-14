import { Question } from "domain/Types";
import { useRef } from "react";
import { useReducer, useState } from "react";

function useSection(
  questions: Question[],
  handleFinishSection: (score: number) => void,
  extraFunctionality?: () => void
) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];
  const sectionScore = useRef(0);

  function handleAnswerClick(choiceIndexSelected: number) {
    if (currentQuestion.correctChoiceIndex === choiceIndexSelected) sectionScore.current += 1;

    if (questionIndex !== questions.length - 1) {
      setQuestionIndex(prev => prev + 1);
      if (extraFunctionality) extraFunctionality();
    } else {
      handleFinishSection(sectionScore.current);
    }
  }

  return [currentQuestion, handleAnswerClick] as const;
}

export default useSection;
