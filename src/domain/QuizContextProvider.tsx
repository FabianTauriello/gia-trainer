import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { Question, QuizAttempt, QuizContextType } from "./Types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppSelector";
import { addNewQuizAttempt } from "./slices/quizSlice";

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
  const dispatch = useAppDispatch();

  const [questionIndex, setQuestionIndex] = useState<number>(startingQuestionIndex);
  const [categoriesStarted, setCategoriesStarted] = useState<string[]>([]);
  const [hideChoices, setHideChoices] = useState(true); // Toggle visibility of the answer choices (for reasoning cat only)

  const currentQuestion = allQuestions[questionIndex];

  // const attempt: QuizAttempt = useMemo(() => {
  //   return {
  //     id: "",
  //     questions: allQuestions,
  //     totalScore: 0,
  //   };
  // }, []);

  useEffect(() => {
    dispatch(
      addNewQuizAttempt({
        id: "visitor",
        questions: allQuestions,
      })
    );
  }, []);

  function updateAttempt(selectedChoiceIndex: number, isCorrect: boolean) {
    // console.log("updating attempt - before: ", attempt);
    // attempt.questions[questionIndex].selectedChoiceIndex = selectedChoiceIndex;
    // attempt.totalScore += isCorrect ? 1 : 0;
    // console.log("finished updating attempt - after: ", attempt);
  }

  const value = {
    questionIndex,
    setQuestionIndex,
    categoriesStarted,
    setCategoriesStarted,
    currentQuestion,
    inReview,
    allQuestions,
    hideChoices,
    setHideChoices,
    updateAttempt,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizContextProvider;
