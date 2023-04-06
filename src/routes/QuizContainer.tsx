import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { calculateTotalScore, incrementSectionScore, setSections } from "domain/slices/quizAttemptSlice";
import { useGetQuizSectionsQuery, useGetTestDataQuery } from "domain/slices/apislice";
import Quiz from "components/Quiz";

function QuizContainer() {
  const dispatch = useAppDispatch();

  const { data: sections, isLoading, isSuccess, isError, error } = useGetQuizSectionsQuery();

  useEffect(() => {
    if (sections) {
      dispatch(setSections(sections));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>loading</div>;
  }

  return <Quiz sections={sections!} />;
}

export default QuizContainer;
