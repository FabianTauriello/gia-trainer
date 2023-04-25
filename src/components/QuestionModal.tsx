import { Dialog, Transition } from "@headlessui/react";
import { Question, Section } from "domain/Types";
import { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn3 from "./Btn3";
import QuizContextProvider from "domain/QuizContextProvider";
import QuestionController from "./QuestionController";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function QuestionModal({
  questionIndex,
  allQuestions,
  show,
  onClose,
}: {
  questionIndex: number;
  allQuestions: Question[];
  show: boolean;
  onClose: () => void;
}) {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

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
                  {"question.section"} : {`question ${questionIndex + 1}`}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">view question answer here</p>
                </div>
                <Swiper
                  // spaceBetween={50}
                  // style={{ height: "200px" }}
                  modules={[Navigation]}
                  navigation={{ nextEl: ".next", prevEl: ".prev" }}
                  // slidesPerView={1}
                  initialSlide={questionIndex}
                  // onActiveIndexChange={}
                  // onSlideChange={() => console.log("slide change")}
                  onSwiper={setSwiper}
                >
                  {allQuestions.map((q, i) => (
                    <SwiperSlide key={i}>
                      <QuizContextProvider allQuestions={allQuestions} startingQuestionIndex={i} inReview={true}>
                        <QuestionController />
                      </QuizContextProvider>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mt-4 flex justify-between">
                  <Btn3 customCss="prev" text="Previous" handleClick={() => swiper?.slidePrev()} />
                  <Btn3 customCss="next" text="Next" handleClick={() => swiper?.slideNext()} />
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
