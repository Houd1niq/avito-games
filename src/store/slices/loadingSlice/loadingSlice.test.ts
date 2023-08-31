import { describe } from "vitest";
import {
  loadingReducer,
  LoadingSliceState,
  nullStep,
  setStep,
} from "./loadingSlice";

describe("loadingSlice", () => {
  it("should set step", () => {
    const state: LoadingSliceState = {
      pageStep: 1,
    };
    expect(loadingReducer(state, setStep(2)).pageStep).toBe(2);
  });

  it("negative step", () => {
    const state: LoadingSliceState = {
      pageStep: 1,
    };
    expect(loadingReducer(state, setStep(-1)).pageStep).toBe(1);
  });

  it("null step", () => {
    const state: LoadingSliceState = {
      pageStep: 1,
    };
    expect(loadingReducer(state, nullStep()).pageStep).toBe(1);
  });
});
