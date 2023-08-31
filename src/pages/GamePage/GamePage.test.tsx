import { describe, expect } from "vitest";
import { render } from "../../tests/test-utils";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { screen, waitFor } from "@testing-library/react";
import GamePage from "./GamePage";
import React from "react";

const content = (
  <Provider store={store}>
    <MemoryRouter initialEntries={["/game/540"]}>
      <Routes>
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </MemoryRouter>
  </Provider>
);

describe("game page", () => {
  it("should render", async () => {
    render(content);

    await waitFor(
      () => {
        const title = screen.getByRole("heading", { level: 1 });
        expect(title).toBeInTheDocument();
      },
      { timeout: 10000 }
    );
  });
});
