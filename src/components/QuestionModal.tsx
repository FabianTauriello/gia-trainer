import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Btn3 } from "./Btn3";
import QuizContextProvider from "domain/QuizContextProvider";
import { QuestionController } from "./QuestionController";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Utils } from "utils/Utils";
import { useAppSelector } from "hooks/useAppSelector";

import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export function QuestionModal({
  initialQuestionIndex,
  show,
  onClose,
}: {
  initialQuestionIndex: number;
  show: boolean;
  onClose: () => void;
}) {
  const params = useParams<{ quizId: string }>();

  const quiz = useAppSelector((state) => state.quiz);
  const quizAttempt = Utils.getQuizAttemptById(quiz.attempts, params.quizId!);

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialQuestionIndex);

  const activeQuestion = quizAttempt.questions[activeIndex];
  const prevQuestion = quizAttempt.questions[activeIndex - 1];
  const nextQuestion = quizAttempt.questions[activeIndex + 1];

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative" onClose={onClose}>
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
              <Dialog.Panel className="md:w-4/5 transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="mb-2 text-lg font-medium leading-6 text-gray-900 flex justify-center">
                  {`Question ${activeIndex + 1}`}
                </Dialog.Title>
                <Swiper
                  // spaceBetween={50}
                  style={{ height: "600px" }}
                  modules={[Navigation]}
                  navigation={{ nextEl: ".next", prevEl: ".prev" }}
                  // slidesPerView={1}
                  initialSlide={initialQuestionIndex}
                  // onActiveIndexChange={}
                  onSlideChange={(swiper) => {
                    console.log("slide change");
                    setActiveIndex(swiper.activeIndex);
                  }}
                  onSwiper={setSwiper}
                >
                  {quizAttempt.questions.map((q, i) => (
                    <SwiperSlide key={i}>
                      <QuizContextProvider allQuestions={quizAttempt.questions} startingQuestionIndex={i} inReview={true}>
                        <QuestionController />
                      </QuizContextProvider>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mt-4 flex justify-between">
                  <Btn3 customCss={prevQuestion ? "visible" : "invisible"} text="Previous" handleClick={() => swiper?.slidePrev()} />
                  <span className="flex flex-col justify-center">{`Category: ${activeQuestion.category}`}</span>
                  <Btn3 customCss={nextQuestion ? "visible" : "invisible"} text="Next" handleClick={() => swiper?.slideNext()} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
