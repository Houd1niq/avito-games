import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { platform, SortType } from "../../../api/types";

export interface FilterSliceState {
  sort: SortType;
  tag: string[];
  platform: platform;
}

const initialState: FilterSliceState = {
  sort: "relevance",
  tag: [],
  platform: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    addGenre: (state, action: PayloadAction<string>) => {
      state.tag.push(action.payload);
    },
    removeGenre: (state, action: PayloadAction<string>) => {
      state.tag = state.tag.filter((item) => item !== action.payload);
    },
    addPlatform: (state, action: PayloadAction<platform>) => {
      state.platform = action.payload;
    },
  },
});

export const { setSortType, addGenre, removeGenre, addPlatform } =
  filterSlice.actions;
export const { reducer: filterReducer } = filterSlice;
