import { useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { useNavigate, useParams } from "react-router-dom";
import {} from "domain/slices/quizSlice";
import SectionSummary from "components/SectionSummary";
import QuizQuestion from "./QuizQuestion";

// TODO possible merge with <QuizWrapper />
function Quiz() {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const quiz = useAppSelector((state) => state.quiz);
  const activeAttempt = quiz.activeAttempt;

  // TODO put into its own context?
  const [quizState, setQuizState] = useState({
    questionIndex: 0,
    sectionNumber: 1,
    summaryForSectionShown: false,
  });

  const currentQuestion = activeAttempt!.questions[quizState.questionIndex];

  function handleAnswerClick() {
    handleChangeQuestion();
  }

  function handleChangeQuestion() {
    const nextQuestion = activeAttempt!.questions[quizState.questionIndex + 1];
    if (!nextQuestion) {
      const loggedIn = false;
      navigate(loggedIn ? `dashboard/quiz/someId/review` : `/quiz/visitor/review`);
    }
    if (nextQuestion.section === currentQuestion.section) {
      setQuizState((prev) => ({
        questionIndex: prev.questionIndex + 1,
        summaryForSectionShown: true,
        sectionNumber: prev.sectionNumber + 1,
      }));
    }
    setQuizState((prev) => ({ ...prev, questionIndex: prev.questionIndex + 1, summaryForSectionShown: false }));
  }

  if (!quizState.summaryForSectionShown) {
    return (
      <SectionSummary
        handleStartSection={() =>
          setQuizState((prev) => ({ ...prev, summaryForSectionShown: true, sectionNumber: prev.sectionNumber + 1 }))
        }
        question={currentQuestion}
        sectionNumber={quizState.sectionNumber}
      />
    );
  }

  return <QuizQuestion question={currentQuestion} handleAnswerClick={handleAnswerClick} />;
}

export default Quiz;
