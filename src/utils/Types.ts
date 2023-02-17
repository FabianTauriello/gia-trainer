// export type Section =
//   | "Reasoning"
//   | "Perceptual Speed"
//   | "Number Speed and Accuracy"
//   | "Word Meaning"
//   | "Spatial Visualisation";

export type Section = {
  title: string;
  number: number;
  description: string;
  note: string;
  questions: Question[];
};

export type Question = {
  img?: string;
  statement?: string;
  question?: string;
  choices: Choice[];
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
