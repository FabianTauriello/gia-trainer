import { QuestionModal } from "components/QuestionModal";
import { ModalDetails, QuizAttempt, Category } from "domain/Types";
import { useAppDispatch } from "hooks/useAppSelector";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Utils } from "utils/Utils";

// This component must display quiz scores for users who are not logged in, and users HAVE logged in and just want to review their old quiz attempts
export function QuizReview() {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) => state.quiz);
  const quizAttempt = Utils.getQuizAttemptById(quiz.attempts, params.quizId!);
  const categories = splitQuestionsIntoCategories();

  const [modalDetails, setModalDetails] = useState<ModalDetails>({ chosenQuestionIndex: 0, show: false });

  function splitQuestionsIntoCategories() {
    const categories: Category[] = [];
    quizAttempt.questions.forEach((q) => {
      const index = categories.findIndex((s) => s.title === q.category);
      if (index === -1) {
        categories.push({ title: q.category, questions: [q] });
      } else {
        categories[index].questions.push(q);
      }
    });

    return categories;
  }

  return (
    <div>
      <h1>Total Score: {quizAttempt.totalScore}</h1>
      {categories.map((cat, index) => (
        <div key={index}>
          <h1>{cat.title}</h1>
          <h3>Category score: {0}</h3>
          {cat.questions.map((q, i) => {
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
        initialQuestionIndex={modalDetails.chosenQuestionIndex}
        show={modalDetails.show}
        onClose={() => setModalDetails((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}
