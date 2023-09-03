import { CustomButton } from "components/CustomButton";
import { Navbar } from "components/Navbar";
import { QuizReview } from "components/QuizReview";
import { useAddQuizAttemptMutation } from "domain/slices/apislice";
import { setLatestAttemptId, updateLatestQuizAttempt } from "domain/slices/latestAttemptSlice";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";
import { Utils } from "utils/Utils";

export function QuizReviewWrapper() {
  const dispatch = useAppDispatch();
  const { latestAttempt, auth } = useAppSelector((state) => state);
  const [postQuizAttempt, { data, isError, isLoading, error, isUninitialized }] = useAddQuizAttemptMutation();

  const latestAttemptRequiresPosting = auth.user && latestAttempt.value?.id === -1;

  useEffect(() => {
    if (latestAttemptRequiresPosting) {
      postAttempt();
    }
  }, []);

  async function postAttempt() {
    const res = await postQuizAttempt({
      userId: auth.user?.id!,
      attempt: latestAttempt.value!,
    }).unwrap();
    dispatch(setLatestAttemptId(res.data!));
  }

  if (latestAttemptRequiresPosting) {
    if (isUninitialized || isLoading) {
      return (
        <div className="h-screen dark:text-white">
          <Navbar />
          <div className="page-gutter">
            <h1 className="pb-4 pt-8 text-4xl font-extrabold">Saving your attempt...</h1>
            <div className="animate-pulse py-8 grid grid-cols-4 gap-4">
              <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-3" />
              <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
              <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
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
            <h1 className="pb-4 pt-8 text-4xl font-extrabold text-red-600 dark:text-red-500">Error occurred!</h1>
            <div className="pb-8">
              <p>{`There was an error saving your attempt.`}</p>
            </div>
            <CustomButton onClick={postAttempt}>Try Again</CustomButton>
          </div>
        </div>
      );
    }
  }

  return <QuizReview attempt={latestAttempt.value!} />;
}
