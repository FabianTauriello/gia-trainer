import { Question } from "domain/Types";
import Choices from "./Choices";
import SectionContainer from "./QuestionContainer";
import { useContext } from "react";
import { QuizContext } from "domain/QuizContextProvider";

function QuestionPerceptualSpeed({}: {}) {
  const { currentQuestion, quizContext, setQuizContext, inReview } = useContext(QuizContext);

  return (
    <SectionContainer>
      <div className="flex justify-center mb-6 gap-5 text-center">
        {currentQuestion.pairs?.map((pair, i) => {
          return (
            <div key={i} className="text-7xl text-cream font-medium">
              <div className="mb-2">{pair[0]}</div>
              <div className="mt-2">{pair[1]}</div>
            </div>
          );
        })}
      </div>
      <Choices />
    </SectionContainer>
  );
}

export default QuestionPerceptualSpeed;
