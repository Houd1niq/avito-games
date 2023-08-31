import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoadingSliceState {
  pageStep: number;
}

const initialState: LoadingSliceState = {
  pageStep: 1,
};

const loadingSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      if (action.payload <= 0) state.pageStep = 1;
      else state.pageStep = action.payload;
    },
    nullStep: (state) => {
      state.pageStep = 1;
    },
  },
});

export const { setStep, nullStep } = loadingSlice.actions;
export const { reducer: loadingReducer } = loadingSlice;
