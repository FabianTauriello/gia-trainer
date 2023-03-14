import { useAppSelector } from "hooks/useAppSelector";
import { useParams } from "react-router-dom";

function QuizComplete() {
  const totalScore = useAppSelector(state => state.quizAttempt.totalScore);

  return <div>Good job, you've finished the quiz! Your score is...{totalScore}</div>;
}

export default QuizComplete;
