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
  prompt: string;
  text: string;
  choices: Choice[];
};

// TODO when consuming data just add isSelected to the choice objects
export type Choice = {
  text: string;
  isCorrect: boolean;
};
