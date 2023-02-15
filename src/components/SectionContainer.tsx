import useTimer from "hooks/useTimer";
import { useEffect, useMemo, useState } from "react";
import { Section } from "utils/Types";
import CustomButton from "./CustomButton";
import SectionLanding from "./SectionLanding";
import Timer from "./Timer";

const SectionContainer = ({ section, handleFinishSection }: { section: Section; handleFinishSection: () => void }) => {
  const [sectionHasStarted, setSectionHasStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false); // shows question text or question prompt

  const currentQuestion = section.questions[index];

  useEffect(() => {
    // setShowPrompt(false);
  }, [index]);

  function handleAnswerClick() {
    setIndex(prev => prev + 1);
    setShowChoices(false);
  }

  function handleSectionContainerClick() {
    if (!showChoices) {
      setShowChoices(true);
    }
  }

  if (!sectionHasStarted) {
    return <SectionLanding section={section} handleStartSection={() => setSectionHasStarted(true)} />;
  }

  return (
    <div className="bg-red h-screen border border-dotted" onClick={handleSectionContainerClick}>
      <div>{showChoices ? currentQuestion.question : currentQuestion.prompt}</div>
      <div>
        <p>STATE VARIABLES:</p>
        <p>index: {index}</p>
        <p>showChoices: {showChoices.toString()}</p>
      </div>
      {showChoices && (
        <div>
          {currentQuestion.choices.map((choice, i) => (
            <button key={i} onClick={handleAnswerClick} className="p-6 border">
              {choice.text}
            </button>
          ))}
        </div>
      )}
      <Timer initialSeconds={10} onCountdownComplete={() => console.log("timer finished")} />
    </div>
  );
};

export default SectionContainer;

// section has an array of questions
// each question has:
// - the question text
// - the question prompt
// - an array of choices
