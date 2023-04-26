import { ReactNode, createContext, useEffect, useState } from "react";
import { Question, QuizContextType } from "./Types";
import { useNavigate } from "react-router-dom";

export const QuizContext = createContext({} as QuizContextType);

// TODO FIX?? reinitialize quizContext.questionIndex when startingIndex changes
function QuizContextProvider({
  children,
  allQuestions,
  startingQuestionIndex = 0,
  inReview = false,
}: {
  children: ReactNode;
  allQuestions: Question[];
  startingQuestionIndex?: number;
  inReview?: boolean;
}) {
  const [questionIndex, setQuestionIndex] = useState<number>(startingQuestionIndex);
  const [categoriesStarted, setCategoriesStarted] = useState<string[]>([]);

  const currentQuestion = allQuestions[questionIndex];

  const value = {
    questionIndex,
    setQuestionIndex,
    categoriesStarted,
    setCategoriesStarted,
    currentQuestion,
    inReview,
    allQuestions,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizContextProvider;
