import { describe, expect } from "vitest";
import { render, screen } from "../../tests/test-utils";
import React from "react";
import { GenreSelector } from "./GenreSelector";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("GenreSelector", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <GenreSelector />
      </Provider>
    );
    const genreSelector = screen.getByText("Select genre");
    expect(genreSelector).toBeInTheDocument();
  });
});
