import { Disclosure, Transition } from "@headlessui/react";
import { Banner } from "components/Banner";
import { QuestionModal } from "components/QuestionModal";
import { ScoreCard } from "components/ScoreCard";
import { ModalDetails, Category, Question } from "domain/Types";
import { useAddQuizAttemptQuery } from "domain/slices/apislice";
import { useAppDispatch } from "hooks/useAppSelector";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { RxCaretDown } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";

// TODO handle case for visitors
// TODO This component must display quiz scores for users who are not logged in, and users HAVE logged in and just want to review their old quiz attempts
export function QuizReview() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { quiz: quizState, auth } = useAppSelector((state) => state);
  const quizAttempt = quizState.attempts[quizState.attempts.length - 1];
  const categories = splitQuestionsIntoCategories();

  const { data, isLoading, isError, error } = useAddQuizAttemptQuery({ userId: auth.user?.id!, attempt: quizAttempt });

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

  // if (isLoading) {
  //   return (
  //     <div className="h-screen bg-slate-200 dark:bg-slate-900 dark:text-white">
  //       <Banner title="...loading your quiz questions" />
  //       <div className="animate-pulse px-4 py-8 md:px-0 lg:mx-28 grid grid-cols-4 gap-4">
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-3" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-3" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-4" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-1" />
  //         <div className="h-5 bg-slate-400 dark:bg-slate-700 rounded col-span-2" />
  //         <div className="h-8 mt-8 bg-slate-400 dark:bg-slate-700 rounded col-span-4" />
  //       </div>
  //     </div>
  //   );
  // }

  if (isError) {
    return <div>error occured {JSON.stringify(error)}</div>;
  }

  return (
    <div className="h-screen bg-slate-200 dark:bg-slate-900">
      <Banner title="Quiz Results" />
      <section className="flex flex-col gap-4 px-4 lg:px-28 bg-slate-200 dark:bg-slate-900 py-5">
        <ScoreCard categories={categories} />
        {categories.map((cat, index) => (
          // Category card
          <Disclosure key={index} defaultOpen>
            <div className="rounded border dark:border-slate-800 border-slate-300">
              <Disclosure.Button className="w-full dark:border-b-slate-800 border-b-slate-300 dark:bg-darkSlate bg-slate-800 p-3 text-white">
                <div className="flex justify-between align-middle ">
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
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                // enter="transition-all ease-in-out duration-200"
                // enterFrom="-translate-y-full opacity-0"
                // enterTo="translate-y-0 opacity-100"
                // leave="transition duration-75 ease-out"
                // leaveFrom="transform opacity-100"
                // leaveTo="transform opacity-0"
              >
                <Disclosure.Panel className="">
                  <div className="grid gap-2 p-3 md:grid-cols-2 lg:grid-cols-3 bg-slate-100 dark:bg-slate-800">
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
                            {isQuestionCorrect(q) ? <ImCheckmark color="#15803D" size={20} /> : <ImCross color="#B91C1C" size={20} />}
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
        quizAttempt={quizAttempt}
        initialQuestionIndex={modalDetails.chosenQuestionIndex}
        show={modalDetails.show}
        onClose={() => setModalDetails({ ...modalDetails, show: false })}
      />
    </div>
  );
}

// TODO don't harcode these colors
// TODO change flow of questions to flow vertically
// TODO change name of this component to results??
