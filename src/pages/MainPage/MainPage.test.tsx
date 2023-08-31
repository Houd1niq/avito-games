import { describe, expect } from "vitest";
import { render } from "../../tests/test-utils";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { screen, waitFor } from "@testing-library/react";
import React from "react";
import MainPage from "./MainPage";
import GamePage from "../GamePage/GamePage";

const App = (
  <Provider store={store}>
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </MemoryRouter>
  </Provider>
);

describe("Main page", () => {
  it("Should render", async () => {
    render(App);
    expect(screen.getByText("Avito Tech Games")).toBeInTheDocument();
  });

  it("Should redirect to game page", async () => {
    render(App);
    await waitFor(
      () => {
        redirectToGamePage();
      },
      { timeout: 5000 }
    );
  });

  it("Should redirect to game page, then back", async () => {
    render(App);
    await waitFor(
      () => {
        redirectToGamePage();
      },
      { timeout: 5000 }
    );

    await waitFor(
      () => {
        const backButton = screen.getByTestId("back-button");
        expect(backButton).toBeInTheDocument();
        backButton.click();
      },
      { timeout: 5000 }
    );

    expect(screen.getByText("Avito Tech Games")).toBeInTheDocument();
  });
});

function redirectToGamePage() {
  const cards = screen.getAllByTestId("game-card-link");
  expect(cards.length).toBeGreaterThan(0);
  expect(cards[0]).toBeInTheDocument();
  cards[0].click();

  const gamePageTitle = screen.getByRole("heading", { level: 1 });
  expect(gamePageTitle).toBeInTheDocument();
}
