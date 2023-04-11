import { Question, QuizAttempt, ScoredSection } from "domain/Types";

// this testSections array is similar to one obtained from server but it has a couple of extra props:
// 'score' and 'selectedChoiceIndex'
const testSections = [
  {
    title: "Reasoning",
    number: 1,
    questions: [
      {
        statement: "Rebecca is louder than Kate",
        question: "Who is less loud?",
        choices: ["Rebecca", "Kate"],
        correctChoiceIndex: 1,
        selectedChoiceIndex: 1,
      },
      {
        statement: "Tracy has more money than Stephen",
        question: "Who is poorer?",
        choices: ["Tracy", "Stephen"],
        correctChoiceIndex: 1,
        selectedChoiceIndex: 1,
      },
      {
        statement: "Stewart is stronger than Joe",
        question: "Who is stronger?",
        choices: ["Stewart", "Joe"],
        correctChoiceIndex: 0,
        selectedChoiceIndex: 0,
      },
      {
        statement: "Joshua is not as flexible as Chris",
        question: "Who is less adaptable?",
        choices: ["Joshua", "Chris"],
        correctChoiceIndex: 0,
        selectedChoiceIndex: 0,
      },
      {
        statement: "Bob is not as happy as Paul",
        question: "Who is sadder?",
        choices: ["Bob", "Paul"],
        correctChoiceIndex: 0,
        selectedChoiceIndex: 0,
      },
    ],
    score: 0,
  },
  {
    title: "Perceptual Speed",
    number: 2,
    questions: [
      {
        pairs: [
          ["f", "F"],
          ["d", "D"],
          ["m", "R"],
          ["h", "H"],
        ],
        choices: ["0", "1", "2", "3", "4"],
        correctChoiceIndex: 3,
        selectedChoiceIndex: 3,
      },
    ],
    score: 0,
  },
  {
    title: "Number Speed and Accuracy",
    number: 3,
    questions: [
      {
        choices: ["4", "2", "8"],
        correctChoiceIndex: 2,
        selectedChoiceIndex: 2,
      },
      {
        choices: ["12", "3", "5"],
        correctChoiceIndex: 0,
        selectedChoiceIndex: 0,
      },
      {
        choices: ["10", "7", "5"],
        correctChoiceIndex: 0,
        selectedChoiceIndex: 0,
      },
      {
        choices: ["11", "13", "16"],
        correctChoiceIndex: 2,
        selectedChoiceIndex: 2,
      },
    ],
    score: 0,
  },
  {
    title: "Word Meaning",
    number: 4,
    questions: [
      {
        choices: ["halt", "cold", "stop"],
        correctChoiceIndex: 1,
        selectedChoiceIndex: 1,
      },
      {
        choices: ["up", "down", "street"],
        correctChoiceIndex: 2,
        selectedChoiceIndex: 2,
      },
      {
        choices: ["below", "under", "letter"],
        correctChoiceIndex: 2,
        selectedChoiceIndex: 2,
      },
    ],
    score: 0,
  },
  {
    title: "Spatial Visualisation",
    number: 5,
    questions: [
      {
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
        selectedChoiceIndex: 1,
      },
    ],
    score: 0,
  },
];

export const testAttempt: QuizAttempt = {
  id: "visitor",
  sections: testSections,
  totalScore: 5,
};
