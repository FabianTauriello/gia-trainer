export type Category = {
  title: CategoryTitle;
  questions: Question[];
  score: number;
};

import { Dispatch } from "react";

// TODO use generics here to support different categories or use more specific types?
export type Question = {
  number: number;
  category: CategoryTitle;
  pairs?: string[][];
  letters?: Letter[][];
  statement?: string;
  question?: string;
  choices: string[];
  correctChoiceIndex: number;
  selectedChoiceIndex: number; // extract into AnsweredQuestion?? // use this here and give each question a default value of -1?
};

export type CategoryTitle = "Reasoning" | "Perceptual Speed" | "Number Speed and Accuracy" | "Word Meaning" | "Spatial Visualisation";

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
  questionIndex: number;
  setQuestionIndex: Dispatch<React.SetStateAction<number>>;
  categoriesStarted: string[];
  setCategoriesStarted: Dispatch<React.SetStateAction<string[]>>;
  currentQuestion: Question;
  inReview: boolean;
  allQuestions: Question[];
  hideChoices: boolean;
  setHideChoices: Dispatch<React.SetStateAction<boolean>>;
  updateAttempt: (selectedChoiceIndex: number, isCorrect: boolean) => void;
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
