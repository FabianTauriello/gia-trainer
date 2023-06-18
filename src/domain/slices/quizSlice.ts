import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/Store";
import { Question, QuizAttempt } from "domain/Types";

type QuizState = {
  // TODO may not need this now that I'm using RTK query because data will just be cached when fetched?? i.e. use a getQuizAttemtps query... need it for visitors though...
  // latestAttempt: {
  //   attempt: QuizAttempt | null;
  //   isPosted: boolean; // Used to determine if latest quiz attempt has been posted to server so the router know where to navigate after refresh on review screen
  // };
  latestAttempt: QuizAttempt | null;
};

const initialState: QuizState = {
  // latestAttempt: {
  //   attempt: null,
  //   isPosted: false,
  // },
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
    setLatestAttemptId: (state, action: PayloadAction<string>) => {
      state.latestAttempt!.id = action.payload;
    },
    // toggleIsPostedForLatestAttempt: (state) => {
    //   state.latestAttempt.isPosted = !state.latestAttempt.isPosted;
    // },
    // addNewQuizAttempt: (state, action: PayloadAction<QuizAttempt>) => {
    //   state.attempts.push(action.payload);
    // },
    // updateQuizAttempt: (
    //   state,
    //   action: PayloadAction<{ quizId: string; questionIndex: number; selectedChoiceIndex: number; isCorrect: boolean }>
    // ) => {
    //   const index = state.attempts.findIndex((a) => a.id === action.payload.quizId)!;
    //   state.attempts[index].questions[action.payload.questionIndex].selectedChoiceIndex = action.payload.selectedChoiceIndex;
    //   state.attempts[index].totalScore += action.payload.isCorrect ? 1 : 0;
    // },
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

export const { setLatestQuizAttempt, updateLatestQuizAttempt, setLatestAttemptId } = quizSlice.actions;

export default quizSlice.reducer;
