import QuestionModal from "components/QuestionModal";
import { ModalDetails, QuizAttempt, Section } from "domain/Types";
import { useAppDispatch } from "hooks/useAppSelector";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

// This component must display quiz scores for users who are not logged in, and users HAVE logged in and just want to review their old quiz attempts
function QuizReview() {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) => state.quiz);
  const quizAttempt = getQuizAttemptById(quiz.attempts, params.quizId!);
  const sections = splitQuestionsIntoSections();

  const [modalDetails, setModalDetails] = useState<ModalDetails>({ chosenQuestionIndex: 0, show: false });

  function splitQuestionsIntoSections() {
    const sections: Section[] = [];
    quizAttempt.questions.forEach((q) => {
      const index = sections.findIndex((s) => s.title === q.section);
      if (index === -1) {
        sections.push({ title: q.section, questions: [q] });
      } else {
        sections[index].questions.push(q);
      }
    });

    return sections;
  }

  function getQuizAttemptById(attempts: QuizAttempt[], id: string) {
    const i = attempts.findIndex((attempts) => attempts.id === id);
    return attempts[i];
  }

  return (
    <div>
      <h1>Total Score: {quizAttempt.totalScore}</h1>
      {sections.map((section, index) => (
        <div key={index}>
          <h1>{section.title}</h1>
          <h3>section score: {0}</h3>
          {section.questions.map((q, i) => {
            return (
              <div
                key={i}
                onClick={() => setModalDetails({ chosenQuestionIndex: q.number! - 1, show: true })}
                className="bg-cream w-8 border inline-flex flex-col items-center"
              >
                <FaCheck color="green" />
                {q.number}
              </div>
            );
          })}
        </div>
      ))}
      <QuestionModal
        questionIndex={modalDetails.chosenQuestionIndex}
        allQuestions={quizAttempt.questions}
        show={modalDetails.show}
        onClose={() => setModalDetails((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}

export default QuizReview;
