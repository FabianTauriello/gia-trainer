import { Dispatch } from "react";

export type Category = {
  title: CategoryTitle;
  questions: Question[];
  score: number;
};

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
  id: string;
  firstName: string;
  lastName: string;
};

export type NewUser = Omit<User, "id"> & LoginCredentials;

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

export type LoginCredentials = {
  email: string;
  password: string;
};

export type ApiResponse<T = null> = {
  success: boolean;
  data?: T;
  statusCode: 200 | 201 | 400 | 401 | 409 | 500;
  message: string;
};
