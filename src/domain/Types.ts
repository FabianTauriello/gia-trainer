export type Section = {
  title: string;
  number: number;
  description: string;
  note: string;
  questions: Question[];
};

// TODO use generics here to support different sections?
export type Question = {
  pairs?: string[][];
  letters?: Letter[][];
  statement?: string;
  question?: string;
  choices: Choice[];
};

type Letter = {
  char: string;
  rot: number;
  flip: boolean;
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

// TODO when consuming data just add isSelected to the choice objects
export type Choice = {
  text: string;
  isCorrect: boolean;
};
