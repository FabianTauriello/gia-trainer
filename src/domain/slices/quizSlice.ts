import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/store";
import { Question, QuizAttempt } from "domain/Types";

type QuizState = {
  // TODO may not need this now that I'm using RTK query because data will just be cached when fetched?? i.e. use a getQuizAttemtps query... need it for visitors though...
  latestAttempt: QuizAttempt | null;
};

const initialState: QuizState = {
  latestAttempt: null,
};

// Holds/manages all quiz attempts for current user
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setLatestQuizAttempt: (state, action: PayloadAction<QuizAttempt>) => {
      state.latestAttempt = action.payload;
      // state.latestAttempt.isPosted = false;
    },
    updateLatestQuizAttempt: (
      state,
      action: PayloadAction<{ questionIndex: number; selectedChoiceIndex: number; isCorrect: boolean }>
    ) => {
      state.latestAttempt!.questions[action.payload.questionIndex].selectedChoiceIndex = action.payload.selectedChoiceIndex;
      state.latestAttempt!.totalScore += action.payload.isCorrect ? 1 : 0;
    },
    setLatestAttemptId: (state, action: PayloadAction<number>) => {
      state.latestAttempt!.id = action.payload;
    },
  },
});

export const { setLatestQuizAttempt, updateLatestQuizAttempt, setLatestAttemptId } = quizSlice.actions;

export default quizSlice.reducer;
