import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/useAppSelector";
import { setActiveAttempt } from "domain/slices/quizSlice";
import { useGetQuizQuestionsQuery } from "domain/slices/apislice";
import Quiz from "components/Quiz";

function QuizWrapper() {
  const dispatch = useAppDispatch();

  // TODO handle error here or use lazy hook version
  const { data: questions, isSuccess, isError, error } = useGetQuizQuestionsQuery();

  const [initializingQuizAttempt, setInitializingQuizAttempt] = useState(true);

  useEffect(() => {
    if (questions?.length) {
      dispatch(setActiveAttempt({ questions }));
      setInitializingQuizAttempt(false);
    }
  }, [questions]);

  if (initializingQuizAttempt) return <div>loading...</div>;

  if (isError) return <div>error retrieving latest quiz questions</div>;

  return <Quiz />;
}

export default QuizWrapper;
