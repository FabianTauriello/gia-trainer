import useSection from "hooks/useSection";
import { useState } from "react";
import Choices from "./Choices";
import QuestionContainer from "./QuestionContainer";

function QuestionNumberSpeedAndAccuracy({}: {}) {
  return (
    <QuestionContainer>
      <Choices />
    </QuestionContainer>
  );
}

export default QuestionNumberSpeedAndAccuracy;
