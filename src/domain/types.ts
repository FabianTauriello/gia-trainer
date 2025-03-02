import { z, ZodObject, ZodString } from "zod";

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
  signUpTimestamp?: string;
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

export type PasswordConstraints = {
  lowercaseLetter: boolean;
  uppercaseLetter: boolean;
  minLength: boolean;
  containsNumber: boolean;
  containsSpecialCharacter: boolean;
};

export type QuizAttempt = {
  id: number; // Initially this will be -1, and later set on server
  totalScore: number;
  overallAccuracy: number;
  categoryAccuracies: CategoryAccuracy[];
  questions: Question[];
  timestamp: string;
};

export type CategoryAccuracy = {
  category: string;
  accuracy: number;
};

export type Ranking = {
  category: string | null;
  position: number;
  recordedAt: string;
};

export type PageInfo = {
  page: number;
  limit: number;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type TimeRange = {
  label: string;
  value: number;
};

export type DataPoint = {
  x: Date;
  y: string;
};

export type ApiResponse<T = null> = {
  success: boolean;
  data?: T;
  statusCode: 200 | 201 | 400 | 401 | 409 | 500;
  message: string;
};
