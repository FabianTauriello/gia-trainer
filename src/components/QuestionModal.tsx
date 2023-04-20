import { Dialog, Transition } from "@headlessui/react";
import { Section } from "domain/Types";
import { Fragment } from "react";
import Btn3 from "./Btn3";
import QuestionReasoning from "components/QuestionReasoning";
import QuizContextProvider from "domain/QuizContextProvider";
import QuizController from "./QuizController";

function QuestionModal({
  section,
  questionNumber,
  show,
  handlePrev,
  handleNext,
  onClose,
}: {
  section: Section;
  questionNumber: number;
  show: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  onClose: () => void;
}) {
  console.log("rendering modal");
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  {section.title} : {`question ${questionNumber}`}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">view question answer here</p>
                </div>

                <QuizContextProvider questions={[]} startingQuestionIndex={2} inReview>
                  <QuizController />
                </QuizContextProvider>

                <div className="mt-4 flex justify-between">
                  {/* TODO make this a swiper? */}
                  <Btn3 text="Previous" handleClick={handlePrev} />
                  <Btn3 text="Next" handleClick={handleNext} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default QuestionModal;
