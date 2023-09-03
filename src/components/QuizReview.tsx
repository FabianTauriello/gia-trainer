import { Category, ModalDetails, Question, QuizAttempt } from "domain/Types";
import { Disclosure, Transition } from "@headlessui/react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { QuestionModal } from "./QuestionModal";
import { RxCaretDown } from "react-icons/rx";
import { CustomTitle } from "./CustomTitle";
import { ScoreCard } from "./ScoreCard";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { PiCaretCircleLeft } from "react-icons/pi";

interface QuizReviewProps {
  attempt: QuizAttempt;
  embedWithinDash?: boolean;
  handleBackButton?: () => void;
}

// This component can appear in 3 places:
// 1. after of a visitor attempt
// 2. after of a user attempt
// 3. when user clicks on an attempt row from the dashboard.
export function QuizReview({ attempt, embedWithinDash = false, handleBackButton }: QuizReviewProps) {
  const [modalDetails, setModalDetails] = useState<ModalDetails>({ chosenQuestionIndex: 0, show: false });

  const categories = splitQuestionsIntoCategories();

  function splitQuestionsIntoCategories() {
    const categories: Category[] = [];

    // Split questions into separate categories
    attempt.questions.forEach((q) => {
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
      {!embedWithinDash && <Navbar />}
      <div className={embedWithinDash ? "" : "page-gutter"}>
        <div className="flex justify-between items-center">
          <div className="flex">
            {embedWithinDash && (
              <button className="mr-4" onClick={handleBackButton}>
                <PiCaretCircleLeft size={40} />
              </button>
            )}
            <CustomTitle title={`Quiz Review`} />
          </div>
          <h2 className="text-2xl">Id: {attempt.id}</h2>
        </div>
        <section className="flex flex-col gap-4 py-5">
          <ScoreCard categories={categories} />
          <h1 className="text-xl bg-emerald-600 text-white p-4">Breakdown</h1>
          {categories.map((cat, index) => (
            // Category card
            <Disclosure key={index} defaultOpen>
              <div className="rounded border dark:border-slate-800 border-slate-300 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Disclosure.Button className="w-full dark:bg-darkSlate bg-white p-3 dark:text-white z-50">
                  <div className="flex justify-between align-middle">
                    <h1 className="mr-1 text-lg font-medium">{cat.title}</h1>
                    <h3 className="text-lg">
                      {cat.score} / {cat.questions.length}
                    </h3>
                  </div>
                  <div className="flex justify-between text-left">
                    <p className="mt-2">{getCategoryGuide(cat)}</p>
                    <RxCaretDown size={40} className="invisible ui-open:rotate-180 ui-open:transform md:visible" />
                  </div>
                </Disclosure.Button>
                <Transition enter="transition-all ease-in-out duration-200" enterFrom="translate-y-full" enterTo="translate-y-0">
                  <Disclosure.Panel className="border-t dark:border-t-slate-800 border-t-slate-300">
                    <div className="grid gap-2 p-3 md:grid-cols-3 bg-slate-100 dark:bg-slate-800">
                      {cat.questions.map((q, i) => {
                        return (
                          <div
                            key={i}
                            onClick={() => setModalDetails({ chosenQuestionIndex: q.number! - 1, show: true })}
                            className={`flex cursor-pointer justify-between border border-white dark:border-slate-800 bg-white dark:bg-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-darkSlate`}
                          >
                            {/* Question number and mark */}
                            <div className="flex">
                              <div className={`${isQuestionCorrect(q) ? "bg-correct" : "bg-incorrect"} mr-2 w-2.5`} />
                              <div className="my-2 text-xl">Question {q.number}</div>
                            </div>
                            {/* Tick / cross */}
                            <div className="mr-2 flex flex-col justify-center">
                              {isQuestionCorrect(q) ? (
                                <ImCheckmark color="#15803D" size={20} />
                              ) : (
                                <ImCross color="#B91C1C" size={20} />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </div>
            </Disclosure>
          ))}
        </section>
        <QuestionModal
          quizAttempt={attempt}
          initialQuestionIndex={modalDetails.chosenQuestionIndex}
          show={modalDetails.show}
          onClose={() => setModalDetails({ ...modalDetails, show: false })}
        />
      </div>
    </div>
  );
}
