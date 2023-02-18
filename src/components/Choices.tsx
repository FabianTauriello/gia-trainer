import { Choice } from "domain/Types";

function Choices({
  choices,
  handleAnswerClick,
  showChoices,
}: {
  choices: Choice[];
  handleAnswerClick: () => void;
  showChoices: boolean;
}) {
  return (
    <div>
      {choices.map((choice, i) => (
        <button key={i} onClick={handleAnswerClick} className="p-6 border">
          {showChoices && choice.text}
        </button>
      ))}
    </div>
  );
}

export default Choices;
