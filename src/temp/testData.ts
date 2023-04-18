import { Question, QuizAttempt } from "domain/Types";

// this questions array is similar to one obtained from server
const questions = [
  {
    number: 1,
    section: "Reasoning",
    statement: "Rebecca is louder than Kate",
    question: "Who is less loud?",
    choices: ["Rebecca", "Kate"],
    correctChoiceIndex: 1,
  },
  {
    number: 2,
    section: "Reasoning",
    statement: "Tracy has more money than Stephen",
    question: "Who is poorer?",
    choices: ["Tracy", "Stephen"],
    correctChoiceIndex: 1,
  },
  {
    number: 3,
    section: "Reasoning",
    statement: "Stewart is stronger than Joe",
    question: "Who is stronger?",
    choices: ["Stewart", "Joe"],
    correctChoiceIndex: 0,
  },
  {
    number: 4,
    section: "Reasoning",
    statement: "Joshua is not as flexible as Chris",
    question: "Who is less adaptable?",
    choices: ["Joshua", "Chris"],
    correctChoiceIndex: 0,
  },
  {
    number: 5,
    section: "Reasoning",
    statement: "Bob is not as happy as Paul",
    question: "Who is sadder?",
    choices: ["Bob", "Paul"],
    correctChoiceIndex: 0,
  },
  {
    number: 6,
    section: "Perceptual Speed",
    pairs: [
      ["f", "F"],
      ["d", "D"],
      ["m", "R"],
      ["h", "H"],
    ],
    choices: ["0", "1", "2", "3", "4"],
    correctChoiceIndex: 3,
  },
  {
    number: 7,
    section: "Number Speed and Accuracy",
    choices: ["4", "2", "8"],
    correctChoiceIndex: 2,
  },
  {
    number: 8,
    section: "Number Speed and Accuracy",
    choices: ["12", "3", "5"],
    correctChoiceIndex: 0,
  },
  {
    number: 9,
    section: "Number Speed and Accuracy",
    choices: ["10", "7", "5"],
    correctChoiceIndex: 0,
  },
  {
    number: 10,
    section: "Number Speed and Accuracy",
    choices: ["11", "13", "16"],
    correctChoiceIndex: 2,
  },
  {
    number: 11,
    section: "Word Meaning",
    choices: ["halt", "cold", "stop"],
    correctChoiceIndex: 1,
  },
  {
    number: 12,
    section: "Word Meaning",
    choices: ["up", "down", "street"],
    correctChoiceIndex: 2,
  },
  {
    number: 13,
    section: "Word Meaning",
    choices: ["below", "under", "letter"],
    correctChoiceIndex: 2,
  },
  {
    number: 14,
    section: "Spatial Visualisation",
    letters: [
      [
        {
          char: "R",
          rot: 180,
          flip: false,
        },
        {
          char: "R",
          rot: -90,
          flip: true,
        },
      ],
      [
        {
          char: "R",
          rot: 90,
          flip: false,
        },
        {
          char: "R",
          rot: -90,
          flip: false,
        },
      ],
    ],
    choices: ["0", "1", "2"],
    correctChoiceIndex: 1,
  },
];

export const testAttempt: QuizAttempt = {
  id: "visitor",
  questions: questions,
  totalScore: 5,
};
