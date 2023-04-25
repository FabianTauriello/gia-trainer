import { ReactNode, createContext, useEffect, useState } from "react";
import { Question, QuizContextData, QuizContextType } from "./Types";
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
  // TODO separate i reckon. only combine when you need to update multiple state variables at once and they are logically similar
  const [quizContext, setQuizContext] = useState<QuizContextData>({
    questionIndex: startingQuestionIndex,
    sectionsStarted: [],
  });

  const currentQuestion = allQuestions[quizContext.questionIndex];

  const value = {
    quizContext,
    setQuizContext,
    currentQuestion,
    inReview,
    allQuestions,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizContextProvider;
