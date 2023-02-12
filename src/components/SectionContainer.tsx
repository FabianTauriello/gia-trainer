import useTimer from "hooks/useTimer";
import { useEffect, useMemo, useState } from "react";
import { Section } from "utils/Types";
import CustomButton from "./CustomButton";
import QuestionContainer from "./QuestionContainer";

const SectionLanding = ({ section, handleStartSection }: { section: Section; handleStartSection: () => void }) => {
  return (
    <div>
      <div className="py-8 px-8 bg-green">
        <h1 className="text-4xl font-extrabold">
          Section {section.number}: {section.title}
        </h1>
      </div>
      <div className="py-8 px-8">
        <p>{section.description}</p>
        <p>{section.note}</p>
      </div>
      <CustomButton text="Start Section" handleClick={handleStartSection} customCss="ml-8" />
    </div>
  );
};

const SectionContainer = ({ section, handleFinishSection }: { section: Section; handleFinishSection: () => void }) => {
  const deadline = new Date().toString()
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);

  const [sectionHasStarted, setSectionHasStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  const currentQuestion = section.questions[index];

  function handleAnswerClick() {
    setIndex(prev => prev + 1);
    setShowQuestion(false);
  }

  useEffect(() => {
    const interval = setInterval(
        () => setTime(parsedDeadline - Date.now()),
        1000,
    );

    return () => clearInterval(interval);
}, [])


  if (!sectionHasStarted) {
    return <SectionLanding section={section} handleStartSection={() => setSectionHasStarted(true)} />;
  }

return(

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
  <div>{(time / 1000) % 60}</div>
</div>
)


  // return <QuestionContainer section={section} time={time}></QuestionContainer>;
};

export default SectionContainer;
