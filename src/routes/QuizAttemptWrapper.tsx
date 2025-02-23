import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useGetQuizQuestionsQuery } from "domain/slices/apislice";
import { CustomButton } from "components/common/CustomButton";
import { setLatestQuizAttempt } from "domain/slices/latestAttemptSlice";
import { Navbar } from "components/common/Navbar";
import { QuizContextProvider } from "components/quiz/QuizContextProvider";
import { QuestionController } from "components/quiz/QuestionController";

// Fetches latest quiz questions from server, adds an attempt (if a user exists), and initializes the quiz attempt
export function QuizAttemptWrapper() {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);

  const { data, isError, isLoading, isFetching, refetch, isSuccess } = useGetQuizQuestionsQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setLatestQuizAttempt({
          id: -1,
          totalScore: 0,
          overallAccuracy: 0,
          categoryAccuracies: [],
          questions: data.data!,
          timestamp: "",
        })
      );
    }
  }, [isSuccess]);

  if (isLoading || isFetching) {
    return (
      <div className="h-screen dark:text-white">
        <Navbar />
        <div className="page-gutter">
          <h1 className="text-4xl font-extrabold pt-10 pb-8">Loading your quiz questions...</h1>
          <div className="animate-pulse grid grid-cols-4 gap-4">
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
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen dark:text-white">
        <Navbar />
        <div className="page-gutter">
          <h1 className="text-4xl font-extrabold pt-10 pb-8 text-red-600 dark:text-red-500">Error occurred!</h1>
          <div className="pb-8">
            <p>There was an unkown error retrieving the latest quiz questions. You can try again by clicking the button below.</p>
          </div>
          <CustomButton customCss="w-full" onClick={refetch}>
            Load Questions
          </CustomButton>
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
