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
  selectedChoiceIndex: number; // Each question has a default value of -1
};

export type CategoryTitle = "Reasoning" | "Perceptual Speed" | "Number Speed and Accuracy" | "Word Meaning" | "Spatial Visualisation";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImgId: string;
  profileImgColor: string;
};

export type Settings = {
  darkMode: boolean;
  exposeName: boolean;
  showQuizTimer: boolean;
};

export type NewUser = Omit<User, "id"> & { password: string };

export type Profile = Omit<User, "id" | "email">;

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
  id: number; // Initially this will be -1
  totalScore: number;
  questions: Question[];
  timestamp: string;
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

export type PageInfo = {
  page: number;
  limit: number;
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
