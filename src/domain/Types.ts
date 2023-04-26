export type Category = {
  title: string;
  questions: Question[];
};

import { Dispatch } from "react";

// TODO use generics here to support different categories or use more specific types?
export type Question = {
  number: number;
  category: string;
  pairs?: string[][];
  letters?: Letter[][];
  statement?: string;
  question?: string;
  choices: string[];
  correctChoiceIndex: number;
  // selectedChoiceIndex: number; // extract into AnsweredQuestion?? // use this here and give each question a default value of -1?
};

export type User = {
  name: string;
};

export type ModalDetails = {
  chosenQuestionIndex: number;
  show: boolean;
};

type Letter = {
  char: string;
  rot: number;
  flip: boolean;
};

export type QuizAttempt = {
  id: string;
  questions: Question[];
  totalScore: number;
};

export type QuizContextType = {
  quizContext: QuizContextData;
  setQuizContext: Dispatch<React.SetStateAction<QuizContextData>>;
  currentQuestion: Question;
  inReview: boolean;
  allQuestions: Question[];
};

export type QuizContextData = {
  questionIndex: number;
  categoriesStarted: string[];
};

export type ActiveQuizAttempt = QuizAttempt & {
  currentQuestionIndex: number;
  currentCategoryNumber: number;
};

// OR use different question types...
// export type Q1 = {
//   statement: string;
//   question: string;
//   choices: Choice[];
// };

// export type Q2 = {
//   img: string;
//   choices: Choice[];
// };

// export type Q3 = {
//   choices: Choice[];
// };
