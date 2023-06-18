import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useAddQuizAttemptMutation, useGetQuizQuestionsQuery } from "domain/slices/apislice";
import { QuestionController } from "components/QuestionController";
import QuizContextProvider from "components/QuizContextProvider";
import { QuizCategoryIntro } from "components/QuizCategoryIntro";
import { CustomTitle } from "components/CustomTitle";
import { CustomButton } from "components/CustomButton";
import { QuizAttempt } from "domain/Types";
import { setLatestQuizAttempt } from "domain/slices/quizSlice";
import { Navbar } from "components/Navbar";

// Fetches latest quiz questions from server, adds an attempt (if a user exists), and initializes the quiz attempt
export function QuizAttemptWrapper() {
  const dispatch = useAppDispatch();
  const { quiz, auth } = useAppSelector((state) => state);

  const { data, isError, isLoading, isFetching, refetch, isSuccess } = useGetQuizQuestionsQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setLatestQuizAttempt({
          id: "",
          totalScore: 0,
          questions: data.data!,
        })
      );
    }
  }, [isSuccess]);

  if (isLoading || isFetching) {
    return (
      <div className="h-screen bg-slate-200 dark:bg-slate-900 dark:text-white">
        <Navbar />
        <CustomTitle title="Loading your quiz questions..." />
        <div className="animate-pulse px-4 py-8 md:px-0 lg:mx-28 grid grid-cols-4 gap-4">
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-3" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-3" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-4" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
          <div className="h-8 mt-8 bg-slate-400 dark:bg-slate-700 rounded col-span-4" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen bg-slate-200 dark:bg-slate-900 dark:text-white">
        <Navbar />
        <CustomTitle title="Error occurred!" errorTint />
        <div className="px-4 md:px-0 lg:mx-28">
          <div className="py-8">
            <p>There was an unkown error retrieving the latest quiz questions. You can try again by clicking the button below.</p>
          </div>
          <CustomButton onClick={refetch}>Load Questions</CustomButton>
        </div>
      </div>
    );
  }

  return (
    <QuizContextProvider allQuestions={data?.data!}>
      <QuestionController />
    </QuizContextProvider>
  );
}
