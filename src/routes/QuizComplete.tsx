import { useAppSelector } from "hooks/useAppSelector";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";

function QuizComplete() {
  const quizAttempt = useAppSelector(state => state.quizAttempt);

  return (
    <div>
      <h1>Total Score: {quizAttempt.totalScore}</h1>
      {quizAttempt.sections.map((section, index) => (
        <div key={index}>
          <h1>{section.title}</h1>
          <h3>section score: {section.score}</h3>
          {section.questions.map((question, i) => {
            let previousQuestionsLength = 0;
            quizAttempt.sections
              .slice(0, index)
              .forEach(section => (previousQuestionsLength += section.questions.length));
            return (
              <div key={i} className="bg-cream w-8 border inline-flex flex-col items-center">
                <FaCheck color="green" />
                {i + 1 + previousQuestionsLength}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default QuizComplete;
