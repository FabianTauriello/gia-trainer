import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/useAppSelector";
import { useGetQuizQuestionsQuery } from "domain/slices/apislice";
import { QuestionController } from "components/QuestionController";
import QuizContextProvider from "domain/QuizContextProvider";
import { CategoryIntro } from "components/CategoryIntro";
import { Banner } from "components/Banner";
import { CustomButton } from "components/CustomButton";

export function QuizAttemptWrapper() {
  const { data, isError, isLoading, refetch } = useGetQuizQuestionsQuery();

  if (isLoading)
    return (
      <div className="h-screen bg-slate-200 dark:bg-slate-900 dark:text-white">
        <Banner title="...loading your quiz questions" />
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

  if (isError)
    return (
      <div className="h-screen bg-slate-200 dark:bg-slate-900 dark:text-white">
        <Banner title="Error" />
        <div className="px-4 md:px-0 lg:mx-28">
          <div className="py-8">
            <p>There was an unkown error retrieving the latest quiz questions. You can try again by clicking the button below.</p>
          </div>
          <CustomButton onClick={refetch}>Load Questions</CustomButton>
        </div>
      </div>
    );

  return (
    <QuizContextProvider allQuestions={data!}>
      <QuestionController />
    </QuizContextProvider>
  );
}
