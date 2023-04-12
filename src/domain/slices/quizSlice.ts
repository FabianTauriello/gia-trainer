import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/Store";
import { QuizAttempt, Section } from "domain/Types";
import { testAttempt } from "temp/testData";

type QuizState = {
  reviewing: boolean;
  attempts: QuizAttempt[];
};

const initialState: QuizState = {
  reviewing: false,
  // TODO make sure to empty this array when you're happy with the review screen
  attempts: [testAttempt],
};

// Holds/manages all quiz attempts for current user
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    // Toggles to true when review page mounts, and false when it unmounts
    toggleReviewStatus: (state) => {
      state.reviewing = !state.reviewing;
    },
    // Called at beginning of a quiz, intializing section scores and total score to zero
    addNewQuizAttempt: (state, action: PayloadAction<{ quizId: string; sections: Section[] }>) => {
      if (state.attempts.find((a) => a.id === action.payload.quizId)) return; // TODO consider resetting existing quiz attempt instead of just returning here
      const newQuizAttempt = {
        id: action.payload.quizId,
        sections: action.payload.sections.map((sec) => ({ ...sec, score: 0 })),
        totalScore: 0,
      };
      state.attempts.push(newQuizAttempt);
    },
    // Called at end of each section
    setSectionScore: (state, action: PayloadAction<{ quizId: string; sectionIndex: number; score: number }>) => {
      const index = state.attempts.findIndex((a) => a.id === action.payload.quizId)!;
      state.attempts[index].sections[action.payload.sectionIndex].score = action.payload.score;
    },
    calculateTotalScoreForAttempt: (state, action: PayloadAction<{ quizId: string }>) => {
      const index = state.attempts.findIndex((a) => a.id === action.payload.quizId)!;
      state.attempts[index].totalScore += state.attempts[index].sections.reduce(
        (accumulator, currentValue) => accumulator + currentValue.score,
        0
      );
    },
  },
});

export const { toggleReviewStatus, addNewQuizAttempt, setSectionScore, calculateTotalScoreForAttempt } = quizSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default quizSlice.reducer;
