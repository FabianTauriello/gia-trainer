import QuestionModal from "components/QuestionModal";
import { ModalDetails, QuizAttempt } from "domain/Types";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate, useParams, redirect, Link } from "react-router-dom";

// This component must display quiz scores for users who are not logged in, and users HAVE logged in and just want to review their old quiz attempts
function QuizReview() {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const attempts = useAppSelector((state) => state.quizAttempts.attempts);
  const quizAttempt = getQuizAttemptById(attempts, params.quizId!);

  const [modalDetails, setModalDetails] = useState<ModalDetails>({ section: quizAttempt.sections[0], questionNumber: 1, show: false });

  let questionNumber = 0;

  function getQuizAttemptById(attempts: QuizAttempt[], id: string) {
    const i = attempts.findIndex((attempts) => attempts.id === id);
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
              <div
                key={i}
                onClick={() => setModalDetails({ section: section, questionNumber: questionNumber, show: true })}
                className="bg-cream w-8 border inline-flex flex-col items-center"
              >
                <FaCheck color="green" />
                {questionNumber}
              </div>
            );
          })}
        </div>
      ))}
      <QuestionModal
        section={modalDetails.section!}
        questionNumber={questionNumber}
        show={modalDetails.show}
        onClose={() => setModalDetails((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}

export default QuizReview;
