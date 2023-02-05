import SectionContainer from "components/SectionContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "utils/Types";
import data from "temp/data.json";

const QuizContainer = () => {
  const navigate = useNavigate();

  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <SectionContainer
      section={data.sections[sectionIndex]}
      handleFinishSection={() => setSectionIndex(prev => prev + 1)}
    />
  );
};

export default QuizContainer;

// when consuming data just add isSelected to the choice objects
