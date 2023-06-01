import { QuizContext } from "domain/QuizContextProvider";
import { updateQuizAttempt } from "domain/slices/quizSlice";
import { useAppDispatch } from "hooks/useAppSelector";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function Choices({}: {}) {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { currentQuestion, questionIndex, setQuestionIndex, inReview, allQuestions, updateAttempt, hideChoices, setHideChoices } =
    useContext(QuizContext);

  function handleAnswerClick(choiceIndex: number) {
    // updateAttempt(choiceIndex, choiceIndex === currentQuestion.correctChoiceIndex);
    dispatch(
      updateQuizAttempt({
        quizId: "visitor",
        questionIndex: questionIndex,
        selectedChoiceIndex: choiceIndex,
        isCorrect: choiceIndex === currentQuestion.correctChoiceIndex,
      })
    );

    if (questionIndex === allQuestions.length - 1) {
      const loggedIn = false;
      navigate(loggedIn ? `dashboard/quiz/someId/review` : `/quiz/visitor/review`);
    } else {
      setQuestionIndex(questionIndex + 1);
      setHideChoices(true);
    }
  }

  function getChoiceHighlight(choiceIndex: number) {
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
          className={`flex-1 rounded-lg bg-secondary p-6 outline-none ${
            (hideChoices && currentQuestion.category === "Reasoning") || inReview ? "cursor-default" : "cursor-pointer"
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
