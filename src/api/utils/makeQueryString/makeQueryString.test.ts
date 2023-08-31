import { describe } from "vitest";
import { makeQueryString } from "./makeQueryString";

describe("makeQueryString", () => {
  it("should return a query string", () => {
    const string = makeQueryString({
      tag: ["test"],
      platform: "all",
      sort: "relevance",
    });
    expect(string).toBe("games?tag=test&platform=all&sort-by=relevance");
  });
  it("test with more tags", () => {
    const string = makeQueryString({
      tag: ["mmo", "rpg"],
      platform: "all",
      sort: "relevance",
    });
    expect(string).toBe("games?tag=mmo.rpg&platform=all&sort-by=relevance");
  });
  it("test with no tags", () => {
    const string = makeQueryString({
      platform: "all",
      sort: "relevance",
    });
    expect(string).toBe("games?platform=all&sort-by=relevance");
  });
});
