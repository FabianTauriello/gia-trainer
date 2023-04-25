import { useContext, useEffect, useState } from "react";
import { useAppDispatch } from "hooks/useAppSelector";
import {} from "domain/slices/quizSlice";
import { useGetQuizQuestionsQuery } from "domain/slices/apislice";
import Quiz from "components/QuestionController";
import QuizContextProvider, { QuizContext } from "domain/QuizContextProvider";
import QuizController from "components/QuestionController";

function QuizAttemptWrapper() {
  const dispatch = useAppDispatch();

  // TODO handle error here and maybe use lazy hook version
  const { data: questions, isSuccess, isError, error } = useGetQuizQuestionsQuery();

  const [initializingQuizAttempt, setInitializingQuizAttempt] = useState(true);

  useEffect(() => {
    if (questions?.length) {
      setInitializingQuizAttempt(false);
    }

    return () => {};
  }, [questions]);

  if (initializingQuizAttempt) return <div>loading...</div>;

  if (isError) return <div>error retrieving latest quiz questions</div>;

  return (
    <QuizContextProvider allQuestions={questions!}>
      <QuizController />
    </QuizContextProvider>
  );
}

export default QuizAttemptWrapper;
