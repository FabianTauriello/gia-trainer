import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomButton } from "./CustomButton";
import QuizContextProvider from "domain/QuizContextProvider";
import { QuestionController } from "./QuestionController";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Utils } from "utils/Utils";
import { useAppSelector } from "hooks/useAppSelector";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import { QuizAttempt } from "domain/Types";

interface QuestionModalProps {
  quizAttempt: QuizAttempt;
  initialQuestionIndex: number;
  show: boolean;
  onClose: () => void;
}

export function QuestionModal({ quizAttempt, initialQuestionIndex, show, onClose }: QuestionModalProps) {
  const params = useParams<{ quizId: string }>();

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
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-xl bg-white p-6 text-left shadow-xl transition-all md:w-4/5">
                <Dialog.Title as="h1" className="mb-2 flex justify-center text-lg font-medium leading-6 text-gray-900">
                  {`Question ${activeIndex + 1}`}
                </Dialog.Title>
                <h2 className="mb-2 text-center">{`${activeQuestion.category}`}</h2>
                <Swiper
                  // spaceBetween={50}
                  // style={{ height: "300px" }}
                  modules={[Navigation]}
                  navigation={{ nextEl: ".next", prevEl: ".prev" }}
                  // slidesPerView={1}
                  initialSlide={initialQuestionIndex}
                  // onActiveIndexChange={}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  onSwiper={setSwiper}
                  className="h-full bg-primary-500"
                >
                  {quizAttempt.questions.map((q, i) => (
                    <SwiperSlide key={i} className="h-auto">
                      <QuizContextProvider allQuestions={quizAttempt.questions} startingQuestionIndex={i} inReview={true}>
                        <QuestionController />
                      </QuizContextProvider>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mt-4 flex justify-between gap-2">
                  <CustomButton
                    customCss={`${prevQuestion ? "visible" : "invisible"} flex-1 bg-primary-500 hover:bg-primary-400`}
                    onClick={() => swiper?.slidePrev()}
                  >
                    Previous
                  </CustomButton>
                  <CustomButton
                    customCss={`${nextQuestion ? "visible" : "invisible"} flex-1 bg-primary-500 hover:bg-primary-400`}
                    onClick={() => swiper?.slideNext()}
                  >
                    Next
                  </CustomButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
