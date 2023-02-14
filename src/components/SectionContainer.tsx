import useTimer from "hooks/useTimer";
import { useEffect, useMemo, useState } from "react";
import { Section } from "utils/Types";
import CustomButton from "./CustomButton";
import SectionLanding from "./SectionLanding";
import Timer from "./Timer";

const SectionContainer = ({ section, handleFinishSection }: { section: Section; handleFinishSection: () => void }) => {
  const [sectionHasStarted, setSectionHasStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  const currentQuestion = section.questions[index];

  function handleAnswerClick() {
    setIndex(prev => prev + 1);
    setShowQuestion(false);
  }

  if (!sectionHasStarted) {
    return <SectionLanding section={section} handleStartSection={() => setSectionHasStarted(true)} />;
  }

  return (
    <div onClick={() => setShowQuestion(true)} className="bg-red h-screen">
      <div>{showQuestion ? currentQuestion.text : currentQuestion.prompt}</div>
      {showQuestion && (
        <div>
          {currentQuestion.choices.map((choice, i) => (
            <button key={i} onClick={handleAnswerClick} className="p-6 border">
              {choice.text}
            </button>
          ))}
        </div>
      )}
      <div>{sectionHasStarted.toString()}</div>
      <Timer initialSeconds={10} onCountdownComplete={() => console.log("timer finished")} />
    </div>
  );
};

export default SectionContainer;
