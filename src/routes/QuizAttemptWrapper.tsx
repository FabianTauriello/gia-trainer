import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/useAppSelector";
import { useGetQuizQuestionsQuery } from "domain/slices/apislice";
import { QuestionController } from "components/QuestionController";
import QuizContextProvider, { QuizContext } from "domain/QuizContextProvider";

export function QuizAttemptWrapper() {
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
      <QuestionController />
    </QuizContextProvider>
  );
}
