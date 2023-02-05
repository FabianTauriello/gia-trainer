import SectionContainer from "components/SectionContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "utils/Types";
import data from "temp/data.json";

const QuizContainer = () => {
  const navigate = useNavigate();

  const firstSection = data.sections[0];
  const [currentSection, setCurrentSection] = useState<Section>(firstSection);

  return <SectionContainer section={currentSection} />;
};

export default QuizContainer;

// when consuming data just add isSelected to the choice objects
