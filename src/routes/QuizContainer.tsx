import { useEffect } from "react";
import { useAppDispatch } from "hooks/useAppSelector";
import { addNewQuizAttempt } from "domain/slices/quizSlice";
import { useGetQuizSectionsQuery } from "domain/slices/apislice";
import Quiz from "components/Quiz";

function QuizContainer() {
  const dispatch = useAppDispatch();

  // TODO handle error here
  const { data: sections, isLoading, isSuccess, isError, error } = useGetQuizSectionsQuery();

  useEffect(() => {
    if (sections) dispatch(addNewQuizAttempt({ quizId: "visitor", sections: sections }));
  }, [isLoading]);

  if (isLoading) return <div>loading</div>;

  if (isError) return <div>error retrieving latest quiz questions</div>;

  return <Quiz sections={sections!} />;
}

export default QuizContainer;
