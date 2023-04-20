import useSection from "hooks/useSection";
import { useState } from "react";
import Choices from "./Choices";
import SectionContainer from "./QuestionContainer";

function QuestionNumberSpeedAndAccuracy({}: {}) {
  return (
    <SectionContainer>
      <Choices />
    </SectionContainer>
  );
}

export default QuestionNumberSpeedAndAccuracy;
