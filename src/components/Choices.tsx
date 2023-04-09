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
  return (
    <div className="flex justify-center gap-3 mx-20">
      {choices.map((choice, i) => (
        <button
          key={i}
          onClick={() => handleAnswerClick(i)}
          className={`p-6 bg-secondary rounded-lg flex-1 ${hideChoices ? "cursor-default" : "cursor-pointer"} ${
            correctChoice === i ? "border-4 border-white" : ""
          }`}
        >
          <span className={`${hideChoices ? "invisible" : "visible"}`}>{choice}</span>
        </button>
      ))}
    </div>
  );
}

export default Choices;
