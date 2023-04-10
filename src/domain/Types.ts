export type Section = {
  title: string;
  number: number;
  questions: Question[];
};

// TODO use generics here to support different sections or use more specific types?
export type Question = {
  pairs?: string[][];
  letters?: Letter[][];
  statement?: string;
  question?: string;
  choices: string[];
  correctChoiceIndex: number;
  selectedChoiceIndex: number; // use this here and give each question a default value of -1?
};

export type User = {
  name: string;
};

export type ModalDetails = {
  section: Section | null;
  questionNumber: number;
  show: boolean;
};

type Letter = {
  char: string;
  rot: number;
  flip: boolean;
};

export type ScoredSection = Section & { score: number };

export type QuizAttempt = {
  id: string;
  sections: ScoredSection[];
  totalScore: number;
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
