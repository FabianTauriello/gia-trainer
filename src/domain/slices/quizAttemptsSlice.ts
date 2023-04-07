import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/Store";
import { QuizAttempt, Section } from "domain/Types";

type QuizAttemptsState = {
  attempts: QuizAttempt[];
};

const initialState: QuizAttemptsState = {
  attempts: [],
};

// Holds/manages all quiz attempts for current user
export const quizAttemptsSlice = createSlice({
  name: "quizAttempts",
  initialState,
  reducers: {
    // // called at end of quiz
    // calculateTotalScore: state => {
    //   state.totalScore += state.sections.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
    // },
    // Called at beginning of a quiz, intializing section scores and total score to zero
    addNewQuizAttempt: (state, action: PayloadAction<Section[]>) => {
      const newQuizAttempt = {
        id: "visitor",
        sections: action.payload.map(sec => ({ ...sec, score: 0 })),
        totalScore: 0,
      };
      state.attempts.push(newQuizAttempt);
    },
    // Called at end of each section
    setSectionScore: (state, action: PayloadAction<{ quizId: string; sectionIndex: number; score: number }>) => {
      const index = state.attempts.findIndex(attempt => attempt.id === action.payload.quizId)!;
      state.attempts[index].sections[action.payload.sectionIndex].score = action.payload.score;
    },
    calculateTotalScoreForAttempt: (state, action: PayloadAction<{ quizId: string }>) => {
      const index = state.attempts.findIndex(attempt => attempt.id === action.payload.quizId)!;
      state.attempts[index].totalScore += state.attempts[index].sections.reduce(
        (accumulator, currentValue) => accumulator + currentValue.score,
        0
      );
    },
  },
});

export const { addNewQuizAttempt, setSectionScore, calculateTotalScoreForAttempt } = quizAttemptsSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default quizAttemptsSlice.reducer;
