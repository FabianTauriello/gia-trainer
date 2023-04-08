import { useEffect } from "react";
import { useAppDispatch } from "hooks/useAppSelector";
import { addNewQuizAttempt } from "domain/slices/quizAttemptsSlice";
import { useGetQuizSectionsQuery } from "domain/slices/apislice";
import Quiz from "components/Quiz";

function QuizContainer() {
  const dispatch = useAppDispatch();

  const { data: sections, isLoading, isSuccess, isError, error } = useGetQuizSectionsQuery();

  useEffect(() => {
    if (sections) dispatch(addNewQuizAttempt({ quizId: "visitor", sections: sections }));
  }, [isLoading]);

  if (isLoading) return <div>loading</div>;

  return <Quiz sections={sections!} />;
}

export default QuizContainer;
