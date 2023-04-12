import QuestionModal from "components/QuestionModal";
import { ModalDetails, Question, QuizAttempt, ScoredSection, Section } from "domain/Types";
import { toggleReviewStatus } from "domain/slices/quizSlice";
import { useAppDispatch } from "hooks/useAppSelector";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, redirect, Link } from "react-router-dom";
import { testAttempt } from "temp/testData";

// This component must display quiz scores for users who are not logged in, and users HAVE logged in and just want to review their old quiz attempts
function QuizReview() {
  const params = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const quiz = useAppSelector((state) => state.quiz);
  const quizAttempt = getQuizAttemptById(quiz.attempts, params.quizId!);
  const sections = addQuestionNumbersToSections();

  const [modalDetails, setModalDetails] = useState<ModalDetails>({ section: quizAttempt.sections[0], questionNumber: 1, show: false });

  useEffect(() => {
    // should switch review status to true
    dispatch(toggleReviewStatus());

    return () => {
      // should switch review status to false
      dispatch(toggleReviewStatus());
    };
  }, []);

  // adds question numbers to sections so that it is known what the position of a specific question is
  function addQuestionNumbersToSections() {
    const result: ScoredSection[] = [];
    let num = 1;
    quizAttempt.sections.forEach((s) => {
      const newSection = { ...s };
      const newQuestions: Question[] = [];
      newSection.questions.forEach((q) => {
        newQuestions.push({ number: num, ...q });
        num++;
      });
      newSection.questions = newQuestions;
      result.push(newSection);
    });

    return result;
  }

  function getQuizAttemptById(attempts: QuizAttempt[], id: string) {
    const i = attempts.findIndex((attempts) => attempts.id === id);
    return attempts[i];
  }

  return (
    <div>
      <div>quiz in review? {`${quiz.reviewing}`}</div>
      <h1>Total Score: {quizAttempt.totalScore}</h1>
      {sections.map((section, index) => (
        <div key={index}>
          <h1>{section.title}</h1>
          <h3>section score: {section.score}</h3>
          {section.questions.map((q, i) => {
            return (
              <div
                key={i}
                onClick={() => setModalDetails({ section: section, questionNumber: q.number!, show: true })}
                className="bg-cream w-8 border inline-flex flex-col items-center"
              >
                <FaCheck color="green" />
                {q.number}
              </div>
            );
          })}
        </div>
      ))}
      <QuestionModal
        section={modalDetails.section}
        questionNumber={modalDetails.questionNumber}
        show={modalDetails.show}
        onClose={() => setModalDetails((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}

export default QuizReview;
