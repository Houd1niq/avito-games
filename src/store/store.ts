import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "../api/gamesApi";
import { filterReducer } from "./slices/filterSlice/filterSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { loadingReducer } from "./slices/loadingSlice/loadingSlice";

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    filter: filterReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
