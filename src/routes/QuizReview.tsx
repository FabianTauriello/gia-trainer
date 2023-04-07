import { QuizAttempt } from "domain/Types";
import { useAppSelector } from "hooks/useAppSelector";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";

// This component must display quiz scores for users who are not logged in, and users HAVE logged in and just want to review their old quiz attempts
function QuizReview() {
  const params = useParams<{ quizId: string }>();
  const userStatus = useAppSelector(state => state.userStatus);

  const attempts = useAppSelector(state => state.quizAttempts.attempts);
  const quizAttempt = getQuizAttemptById(attempts, params.quizId!);
  let questionNumber = 0;

  function getQuizAttemptById(attempts: QuizAttempt[], id: string) {
    const i = attempts.findIndex(attempts => attempts.id === id);
    return attempts[i];
  }

  return (
    <div>
      <h1>Total Score: {quizAttempt.totalScore}</h1>
      {quizAttempt.sections.map((section, index) => (
        <div key={index}>
          <h1>{section.title}</h1>
          <h3>section score: {section.score}</h3>
          {section.questions.map((q, i) => {
            questionNumber++;
            return (
              <div key={i} className="bg-cream w-8 border inline-flex flex-col items-center">
                <FaCheck color="green" />
                {questionNumber}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default QuizReview;
