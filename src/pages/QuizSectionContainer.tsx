import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizSectionTitle from "./QuizSectionTitle";

const QuizSection = () => {
  const navigate = useNavigate();
  const [firstPage, setFirstPage] = useState(true);

  if (firstPage) return <QuizSectionTitle handleBeginSection={() => setFirstPage(false)} />;

  return <div className="page">actual test</div>;
};

export default QuizSection;

// when consuming data just add isSelected to the choice objects
