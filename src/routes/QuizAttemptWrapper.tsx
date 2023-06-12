import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/useAppSelector";
import { useGetQuizQuestionsQuery } from "domain/slices/apislice";
import { QuestionController } from "components/QuestionController";
import QuizContextProvider from "domain/QuizContextProvider";

export function QuizAttemptWrapper() {
  const dispatch = useAppDispatch();

  // TODO handle error here and maybe use lazy hook version
  const { data: questions, isError, error, isLoading, isFetching } = useGetQuizQuestionsQuery();

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>error retrieving latest quiz questions</div>;

  return (
    <QuizContextProvider allQuestions={questions!}>
      <QuestionController />
    </QuizContextProvider>
  );
}
