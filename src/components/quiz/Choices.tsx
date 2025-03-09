import { updateLatestQuizAttempt } from "domain/slices/latestAttemptSlice";
import { useAppDispatch } from "hooks/useAppSelector";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "./QuizContextProvider";

export function Choices() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { currentQuestion, questionIndex, setQuestionIndex, inReview, allQuestions, updateAttempt, hideChoices, setHideChoices } =
    useContext(QuizContext);

  function handleAnswerClick(choiceIndex: number) {
    dispatch(
      updateLatestQuizAttempt({
        questionIndex: questionIndex,
        selectedChoiceIndex: choiceIndex,
        isCorrect: choiceIndex === currentQuestion.correctChoiceIndex,
      })
    );

    if (questionIndex === allQuestions.length - 1) {
      navigate("/quiz/review");
    } else {
      setQuestionIndex(questionIndex + 1);
      setHideChoices(true);
    }
  }

  function getCursorStyle() {
    if ((hideChoices && currentQuestion.category === "Reasoning") || inReview) {
      return "cursor-default";
    }

    return "cursor-pointer hover:bg-emerald-700";
  }

  function getBorderStyle(choiceIndex: number) {
    if (!inReview) return "";

    if (choiceIndex === currentQuestion.correctChoiceIndex) {
      return "border-4 border-correct";
    } else if (choiceIndex === currentQuestion.selectedChoiceIndex) {
      return "border-4 border-incorrect";
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 md:mx-44">
      {currentQuestion.choices.map((choice, i) => (
        <button
          key={i}
          disabled={inReview}
          type="button"
          onClick={() => handleAnswerClick(i)}
          className={`w-44 md:w-64 md:h-32 border flex text-xl justify-center items-center rounded-lg bg-emerald-600 text-white p-6 outline-none ${getCursorStyle()} ${getBorderStyle(
            i
          )}`}
        >
          <span className={`${inReview || currentQuestion.category !== "Reasoning" || !hideChoices ? "visible" : "invisible"}`}>
            {choice}
          </span>
        </button>
      ))}
    </div>
  );
}
