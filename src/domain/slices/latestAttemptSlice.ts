import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/store";
import { Question, QuizAttempt } from "domain/types";

type LatestAttempt = {
  value: QuizAttempt | null;
};

const initialState: LatestAttempt = {
  value: null,
};

export const latestAttemptSlice = createSlice({
  name: "latestAttempt",
  initialState,
  reducers: {
    setLatestQuizAttempt: (state, action: PayloadAction<QuizAttempt>) => {
      state.value = action.payload;
    },
    updateLatestQuizAttempt: (
      state,
      action: PayloadAction<{ questionIndex: number; selectedChoiceIndex: number; isCorrect: boolean }>
    ) => {
      state.value!.questions[action.payload.questionIndex].selectedChoiceIndex = action.payload.selectedChoiceIndex;
      state.value!.totalScore += action.payload.isCorrect ? 1 : 0;
    },
    setLatestAttemptId: (state, action: PayloadAction<number>) => {
      state.value!.id = action.payload;
    },
  },
});

export const { setLatestQuizAttempt, updateLatestQuizAttempt, setLatestAttemptId } = latestAttemptSlice.actions;

export default latestAttemptSlice.reducer;
