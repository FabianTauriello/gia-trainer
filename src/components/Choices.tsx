function Choices({
  choices,
  handleAnswerClick,
  hideChoices = false,
}: {
  choices: string[];
  handleAnswerClick: () => void;
  hideChoices?: boolean;
}) {
  return (
    <div className="flex justify-center gap-3 mx-20">
      {choices.map((choice, i) => (
        // TODO might be better to include handleAnswerClick handler here
        <button
          key={i}
          onClick={handleAnswerClick}
          className={`p-6 bg-green rounded-lg flex-1 ${hideChoices ? "cursor-default" : "cursor-pointer"}`}
        >
          <span className={`${hideChoices ? "invisible" : "visible"}`}>{choice}</span>
        </button>
      ))}
    </div>
  );
}

export default Choices;
