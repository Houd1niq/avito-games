import { describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { SortSelector } from "./SortSelector";

describe("Sort selector", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <SortSelector />
      </Provider>
    );
    expect(screen.getByText("By relevance")).toBeInTheDocument();
  });
});
