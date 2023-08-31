import { describe } from "vitest";
import {
  addGenre,
  addPlatform,
  filterReducer,
  FilterSliceState,
  removeGenre,
  setSortType,
} from "./filterSlice";

describe("filterSlice", () => {
  it("should set sort type", () => {
    const state: FilterSliceState = {
      sort: "relevance",
      tag: [],
      platform: "all",
    };
    const updatedState = filterReducer(state, setSortType("release-date"));
    expect(updatedState.sort).toBe("release-date");
  });

  it("should add genre", () => {
    const state: FilterSliceState = {
      sort: "relevance",
      tag: [],
      platform: "all",
    };
    const updatedState = filterReducer(state, addGenre("mmorpg"));
    expect(updatedState.tag).toEqual(["mmorpg"]);
  });

  it("should remove genre", () => {
    const state: FilterSliceState = {
      sort: "relevance",
      tag: ["mmorpg"],
      platform: "all",
    };
    const updatedState = filterReducer(state, removeGenre("mmorpg"));
    expect(updatedState.tag).toEqual([]);
  });

  it("add some genres and delete one", () => {
    const state: FilterSliceState = {
      sort: "relevance",
      tag: [],
      platform: "all",
    };
    let updatedState = filterReducer(state, addGenre("mmorpg"));
    updatedState = filterReducer(updatedState, addGenre("rpg"));
    updatedState = filterReducer(updatedState, addGenre("shooter"));
    updatedState = filterReducer(updatedState, removeGenre("mmorpg"));
    expect(updatedState.tag).toEqual(["rpg", "shooter"]);
  });

  it("should add platform", () => {
    const state: FilterSliceState = {
      sort: "relevance",
      tag: [],
      platform: "all",
    };
    const updatedState = filterReducer(state, addPlatform("pc"));
    expect(updatedState.platform).toBe("pc");
  });
});
