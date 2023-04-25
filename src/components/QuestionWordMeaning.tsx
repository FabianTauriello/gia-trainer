import useSection from "hooks/useSection";
import { Choices } from "./Choices";
import { QuestionContainer } from "./QuestionContainer";

export function QuestionWordMeaning({}: {}) {
  return (
    <QuestionContainer>
      <Choices />
    </QuestionContainer>
  );
}
