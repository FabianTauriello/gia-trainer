import { Banner } from "components/Banner";
import { QuestionModal } from "components/QuestionModal";
import { ScoreCard } from "components/ScoreCard";
import { ModalDetails, Category, Question } from "domain/Types";
import { useAppDispatch } from "hooks/useAppSelector";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { Utils } from "utils/Utils";
import resolveConfig from "tailwindcss/resolveConfig";

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

    // Split questions into separate categories
    quizAttempt.questions.forEach((q) => {
      const index = categories.findIndex((s) => s.title === q.category);
      if (index === -1) {
        categories.push({ title: q.category, questions: [q], score: 0 });
      } else {
        categories[index].questions.push(q);
      }
    });
    // Calculate subtotals for each category
    categories.forEach((cat) => {
      const correctAnswers = cat.questions.filter((q) => isQuestionCorrect(q));
      const score = correctAnswers ? correctAnswers.length : 0;
      cat.score = score;
    });

    return categories;
  }

  function isQuestionCorrect(question: Question) {
    return question.selectedChoiceIndex === question.correctChoiceIndex;
  }

  return (
    <div className="">
      <Banner title="Quiz Review" />
      <ScoreCard categories={categories} />
      {categories.map((cat, index) => (
        <div key={index}>
          <h1>{cat.title}</h1>
          <div className="flex gap-4">
            {cat.questions.map((q, i) => {
              return (
                <div className="border hover:scale-105 transition-transform cursor-pointer">
                  <div
                    key={i}
                    onClick={() => setModalDetails({ chosenQuestionIndex: q.number! - 1, show: true })}
                    className="bg-white inline-flex flex-col items-center p-4"
                  >
                    {/* TODO don't harcode these colors */}
                    {isQuestionCorrect(q) ? <ImCheckmark color="#15803D" /> : <ImCross color="#B91C1C" />}
                    {q.number}
                  </div>
                  <div style={{ background: "red", height: "10px", border: "" }} />
                </div>
              );
            })}
          </div>
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
