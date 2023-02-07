import { useState } from "react";
import { Question, Section } from "utils/Types";

const AnswerButton = ({ text, handleClick }: { text: string; handleClick: () => void }) => {
  return (
    <button onClick={handleClick}>
      <div className="p-6 border">{text}</div>
    </button>
  );
};

const QuestionContainer = ({ section }: { section: Section }) => {
  const [index, setIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  const currentQuestion = section.questions[index];
  // const [questions, setQuestions] = useState<Question[]>(section.questions);

  function handleAnswerClick() {
    setIndex(prev => prev + 1);
    setShowQuestion(false);
  }

  return (
    <div onClick={() => setShowQuestion(true)} className="bg-red h-screen">
      <div>{showQuestion ? currentQuestion.text : currentQuestion.prompt}</div>
      {showQuestion && (
        <div>
          {currentQuestion.choices.map((choice, i) => (
            <AnswerButton key={i} text={choice.text} handleClick={() => handleAnswerClick()} />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionContainer;
