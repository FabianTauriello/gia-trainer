import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/Store";
import { Question, QuizAttempt } from "domain/Types";

type QuizState = {
  attempts: QuizAttempt[];
};

const initialState: QuizState = {
  // TODO make sure to empty this array when you're happy with the review screen
  attempts: [],
  // attempts: [],
};

// Holds/manages all quiz attempts for current user
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addNewQuizAttempt: (state, action: PayloadAction<{ id: string; questions: Question[] }>) => {
      // if (state.attempts.find((a) => a.id === action.payload.quizId)) return; // TODO consider resetting existing quiz attempt instead of just returning here
      const newQuizAttempt: QuizAttempt = {
        id: action.payload.id,
        questions: action.payload.questions,
        totalScore: 0,
      };
      state.attempts.push(newQuizAttempt);
    },
    updateQuizAttempt: (
      state,
      action: PayloadAction<{ quizId: string; questionIndex: number; selectedChoiceIndex: number; isCorrect: boolean }>
    ) => {
      const index = state.attempts.findIndex((a) => a.id === action.payload.quizId)!;
      state.attempts[index].questions[action.payload.questionIndex].selectedChoiceIndex = action.payload.selectedChoiceIndex;
      state.attempts[index].totalScore += action.payload.isCorrect ? 1 : 0;
    },
    // // Called at end of each section
    // setSectionScoreForQuizAttempt: (state, action: PayloadAction<{ quizId: string; sectionIndex: number; score: number }>) => {
    //   const index = state.attempts.findIndex((a) => a.id === action.payload.quizId)!;
    //   state.attempts[index].sections[action.payload.sectionIndex].score = action.payload.score;
    // },
    // calculateTotalScoreForAttempt: (state, action: PayloadAction<{ quizId: string }>) => {
    //   const index = state.attempts.findIndex((a) => a.id === action.payload.quizId)!;
    //   state.attempts[index].totalScore += state.attempts[index].sections.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue.score,
    //     0
    //   );
    // },
  },
});

export const { addNewQuizAttempt, updateQuizAttempt } = quizSlice.actions;

export default quizSlice.reducer;
