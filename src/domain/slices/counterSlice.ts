import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "domain/store";

// Define a type for the slice state
type CounterState = {
  value: number;
};

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // This does not mutate original state because redux toolkit's createSlice uses immer under the hood
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type. I don't have to use this. I can just use the useAppSelector and then pick what I want from there. Both options are shown in Counter.tsx
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
