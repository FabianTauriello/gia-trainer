import { ReactNode, createContext, useEffect, useState } from "react";
import { Question, QuizContextData, QuizContextType } from "./Types";

export const QuizContext = createContext({} as QuizContextType);

function QuizContextProvider({
  children,
  questions,
  startingQuestionIndex = 0,
  inReview = false,
}: {
  children: ReactNode;
  questions: Question[];
  startingQuestionIndex?: number;
  inReview?: boolean;
}) {
  const [quizContext, setQuizContext] = useState<QuizContextData>({
    questionIndex: startingQuestionIndex,
    sectionsStarted: [],
  });

  const currentQuestion = questions[quizContext.questionIndex];

  useEffect(() => {}, []);

  const value = {
    quizContext,
    setQuizContext,
    currentQuestion,
    inReview,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizContextProvider;
