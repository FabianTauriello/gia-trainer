import { updateLatestQuizAttempt } from "domain/slices/quizSlice";
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

  function getChoiceHighlight(choiceIndex: number) {
    if (!inReview) return "";

    if (choiceIndex === currentQuestion.correctChoiceIndex) {
      return "border-4 border-correct";
    } else if (choiceIndex === currentQuestion.selectedChoiceIndex) {
      return "border-4 border-incorrect";
    }
  }

  return (
    <div className="flex justify-center gap-3 md:mx-44">
      {currentQuestion.choices.map((choice, i) => (
        <button
          key={i}
          disabled={inReview}
          type="button"
          onClick={() => handleAnswerClick(i)}
          className={`flex-1 rounded-lg bg-emerald-600 text-white p-6 outline-none ${
            (hideChoices && currentQuestion.category === "Reasoning") || inReview
              ? "cursor-default"
              : "cursor-pointer hover:bg-emerald-500"
          } ${getChoiceHighlight(i)}`}
        >
          <span className={`${inReview || currentQuestion.category !== "Reasoning" || !hideChoices ? "visible" : "invisible"}`}>
            {choice}
          </span>
        </button>
      ))}
    </div>
  );
}
