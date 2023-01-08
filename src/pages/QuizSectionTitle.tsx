import Button from "../components/Button";

const QuizSectionTitle: React.FC<{ handleBeginSection: () => void }> = ({ handleBeginSection }) => {
  return (
    <div className="page">
      <h1>Section</h1>
      <Button text="Begin Section" handleClick={handleBeginSection} />
    </div>
  );
};

export default QuizSectionTitle;
