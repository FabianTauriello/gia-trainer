import { useRef } from "react";
import { useReducer, useState } from "react";

// custom hook to increment question counter
function useSection(
  numberOfQuestions: number,
  handleFinishSection: (score: number) => void,
  extraFunctionality?: () => void
) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const score = useRef(0);

  function handleAnswerClick() {
    console.log("answer clicked");
    if (questionIndex !== numberOfQuestions - 1) {
      setQuestionIndex(prev => prev + 1);
      if (extraFunctionality) extraFunctionality();
    } else {
      handleFinishSection(score.current);
    }
  }

  return [questionIndex, handleAnswerClick] as const;
}

export default useSection;
