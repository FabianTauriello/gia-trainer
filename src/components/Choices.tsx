import { useAppSelector } from "hooks/useAppSelector";

function Choices({
  // TODO for testing only, remove later!!!
  correctChoice,
  choices,
  handleAnswerClick,
  hideChoices = false,
}: {
  correctChoice: number;
  choices: string[];
  handleAnswerClick: (choiceIndexSelected: number) => void;
  hideChoices?: boolean;
}) {
  const quiz = useAppSelector((state) => state.quiz);

  return (
    <div className="flex justify-center gap-3 mx-20">
      {choices.map((choice, i) => (
        <button
          key={i}
          type="button"
          onClick={quiz.activeAttempt ? undefined : () => handleAnswerClick(i)}
          className={`outline-none p-6 bg-secondary rounded-lg flex-1 ${
            hideChoices || quiz.activeAttempt ? "cursor-default" : "cursor-pointer"
          } ${correctChoice === i ? "border-4 border-white" : ""}`}
        >
          <span className={`${hideChoices && !quiz.activeAttempt ? "invisible" : "visible"}`}>{choice}</span>
        </button>
      ))}
    </div>
  );
}

export default Choices;
