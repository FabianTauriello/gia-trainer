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

  function getCategoryGuide(category: Category) {
    switch (category.title) {
      case "Reasoning":
        return "If you received a score of 0-25, it is recommended to practice the tests in the Reasoning category.";
      case "Perceptual Speed":
        return "If you received a score of 0-25, it is recommended to practice the tests in the Perceptual Speed category.";
      case "Number Speed and Accuracy":
        return "If you received a score of 0-17, it is recommended to practice the tests in the Number Speed and Accuracy category.";
      case "Word Meaning":
        return "If you received a score of 0-12, it is recommended to practice the tests in the Word Meaning category.";
      case "Spatial Visualisation":
        return "If you received a score of 0-20, it is recommended to practice the tests in the Spatial Visualisation category.";
      default:
        throw new Error(`There is no guide for category ${category.title}.`);
    }
  }

  return (
    <div className="">
      <Banner title="Quiz Results" />
      <section className="my-5 flex flex-col gap-4 px-4 lg:px-28">
        <ScoreCard categories={categories} />
        {categories.map((cat, index) => (
          // Category card
          <div key={index} className="rounded border border-gray-300 bg-gray-100">
            <div className="border-b border-b-gray-400 bg-gray-300 p-3">
              <div className="flex justify-between align-middle ">
                <h1 className="mr-1 text-lg font-medium">{cat.title}</h1>
                <h3 className="text-lg">
                  {cat.score} / {cat.questions.length}
                </h3>
              </div>
              <p className="mt-2">{getCategoryGuide(cat)}</p>
            </div>
            {/* TODO change flow of questions to flow vertically */}
            <div className="grid gap-2 p-3 md:grid-cols-2 lg:grid-cols-3">
              {cat.questions.map((q, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => setModalDetails({ chosenQuestionIndex: q.number! - 1, show: true })}
                    className={`flex cursor-pointer justify-between border bg-white hover:bg-gray-200`}
                  >
                    {/* Q number and mark */}
                    <div className="flex">
                      <div className={`${isQuestionCorrect(q) ? "bg-correct" : "bg-incorrect"} mr-2 w-2.5`} />
                      <div className="my-2 text-xl">Question {q.number}</div>
                    </div>
                    {/* Tick / cross */}
                    <div className="mr-2 flex flex-col justify-center">
                      {isQuestionCorrect(q) ? <ImCheckmark color="#15803D" size={20} /> : <ImCross color="#B91C1C" size={20} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
      <QuestionModal
        initialQuestionIndex={modalDetails.chosenQuestionIndex}
        show={modalDetails.show}
        onClose={() => setModalDetails((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}

// /* TODO don't harcode these colors */
