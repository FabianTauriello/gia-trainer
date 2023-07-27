import { CustomButton } from "components/CustomButton";
import { CustomTitle } from "components/CustomTitle";
import { Navbar } from "components/Navbar";
import { useAddQuizAttemptMutation } from "domain/slices/apislice";
import { setLatestAttemptId } from "domain/slices/quizSlice";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useEffect } from "react";
import { Utils } from "utils/Utils";

export function QuizReviewAndPost() {
  const { quiz, auth } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const [postQuizAttempt, { data, isError, isLoading, error, isUninitialized }] = useAddQuizAttemptMutation();

  useEffect(() => {
    post();
  }, []);

  useEffect(() => {
    console.log("isE: ", isError);
    console.log("e: ", error);
  }, [isError]);

  async function post() {
    try {
      const res = await postQuizAttempt({
        userId: auth.user?.id!,
        attempt: quiz.latestAttempt!,
      }).unwrap();
      console.log("res: ", res);
      dispatch(setLatestAttemptId(res.data!));
    } catch (error) {
      console.log("Failed to post quiz attempt");
    }
  }

  if (isUninitialized || isLoading) {
    return (
      <div className="h-screen dark:text-white">
        <Navbar />
        <CustomTitle title="Saving your attempt..." />
        <div className="animate-pulse px-4 py-8 md:px-0 lg:mx-28 grid grid-cols-4 gap-4">
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-3" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
          <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen dark:text-white">
        <Navbar />
        <CustomTitle title="Error occurred!" errorTint />
        <div className="px-4 md:px-0 lg:mx-28">
          <div className="py-8">
            <p>{`There was an error saving your attempt: ${Utils.getErrorMessage(error)}`}</p>
          </div>
          <CustomButton onClick={post}>Try Again</CustomButton>
        </div>
      </div>
    );
  }

  // If it reaches here, AppRouter will redirect to <QuizReview />
  return null;
}
