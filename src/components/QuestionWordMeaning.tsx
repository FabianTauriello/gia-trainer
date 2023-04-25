import useSection from "hooks/useSection";
import Choices from "./Choices";
import QuestionContainer from "./QuestionContainer";

function QuestionWordMeaning({}: {}) {
  return (
    <QuestionContainer>
      <Choices />
    </QuestionContainer>
  );
}

export default QuestionWordMeaning;
