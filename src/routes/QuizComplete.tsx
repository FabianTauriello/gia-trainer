import { useAppSelector } from "hooks/useAppSelector";
import { FaCheck } from "react-icons/fa";

function QuizComplete() {
  const quizAttempt = useAppSelector(state => state.quizAttempt);
  let questionNumber = 0;

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

export default QuizComplete;
