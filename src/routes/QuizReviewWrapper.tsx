import { CustomButton } from "components/common/CustomButton";
import { Navbar } from "components/common/Navbar";
import { Review } from "components/quiz/Review";
import { useAddQuizAttemptMutation } from "domain/slices/apislice";
import { setOverallAccuracy, setLatestAttemptId, setCategoryAccuracies } from "domain/slices/latestAttemptSlice";
import { CategoryAccuracy, Question, QuizAttempt } from "domain/types";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";

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
    const overallAccuracy = calculateOverallAccuracy(latestAttempt.value!);
    const categoryAccuracies = calculateCategoryAccuracies(latestAttempt.value!);

    // post attempt
    const res = await postQuizAttempt({
      userId: auth.user?.id!,
      attempt: { ...latestAttempt.value!, overallAccuracy: overallAccuracy, categoryAccuracies: categoryAccuracies },
    }).unwrap();

    // update latest attempt in store
    dispatch(setLatestAttemptId(res.data!));
    dispatch(setOverallAccuracy(overallAccuracy));
    dispatch(setCategoryAccuracies(categoryAccuracies));
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

  return <Review attempt={latestAttempt.value!} />;
}

function calculateOverallAccuracy(attempt: QuizAttempt) {
  const questionCount = attempt.questions.length;
  const correctCount = attempt.questions.reduce((acc, question) => {
    if (question.selectedChoiceIndex === question.correctChoiceIndex) {
      acc += 1;
    }
    return acc;
  }, 0);

  return correctCount / questionCount;
}

// group questions by category to calculate accuracy of each category
function calculateCategoryAccuracies(attempt: QuizAttempt): CategoryAccuracy[] {
  const questionsGroupedByCategory = attempt.questions.reduce((acc, question) => {
    const cat = question.category;
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(question);

    return acc;
  }, {} as { [category: string]: Question[] });

  const result: CategoryAccuracy[] = [];
  Object.entries(questionsGroupedByCategory).forEach(([key, value]) => {
    const questionCount = value.length;
    let correctCount = 0;
    value.forEach((q) => {
      if (q.selectedChoiceIndex === q.correctChoiceIndex) correctCount += 1;
    });

    result.push({ category: key, accuracy: correctCount / questionCount });
  });

  return result;
}
