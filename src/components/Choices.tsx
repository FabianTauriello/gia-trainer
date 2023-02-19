function Choices({
  choices,
  handleAnswerClick,
  showChoices = true,
}: {
  choices: string[];
  handleAnswerClick: () => void;
  showChoices?: boolean;
}) {
  return (
    <div className="flex justify-center gap-3 mx-20">
      {choices.map((choice, i) => (
        <button key={i} onClick={handleAnswerClick} className="p-6 bg-green rounded-lg flex-1">
          <span className={`${showChoices ? "visible" : "invisible"}`}>{choice}</span>
        </button>
      ))}
    </div>
  );
}

export default Choices;
