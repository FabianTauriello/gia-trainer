import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/Store";
import { Section } from "domain/Types";

type ScoredSection = Section & { score: number };

// move to Types.ts?
interface QuizAttemptState {
  sections: ScoredSection[];
  totalScore: number;
}

const initialState: QuizAttemptState = {
  sections: [],
  totalScore: 0,
};

export const quizAttemptSlice = createSlice({
  name: "quizAttempt",
  initialState,
  reducers: {
    // called at beginning of quiz, intializing each section with a score of zero
    setSections: (state, action: PayloadAction<Section[]>) => {
      state.sections = action.payload.map(sec => ({ ...sec, score: 0 }));
    },
    // called at end of each section
    incrementSectionScore: (state, action: PayloadAction<{ sectionIndex: number; score: number }>) => {
      state.sections[action.payload.sectionIndex].score += action.payload.score;
    },
    // called at end of quiz
    calculateTotalScore: state => {
      state.totalScore += state.sections.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
    },
  },
});

export const { setSections, incrementSectionScore, calculateTotalScore } = quizAttemptSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default quizAttemptSlice.reducer;
