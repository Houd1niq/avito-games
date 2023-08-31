import { describe } from "vitest";
import { render, screen } from "../../tests/test-utils";
import { GameList } from "./GameList";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("GameList", () => {
  it("should render skeleton", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <GameList />
        </Provider>
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(
        screen.getAllByTestId("game-card-skeleton").length
      ).toBeGreaterThan(0);
    });
  });

  it("should render cards", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <GameList />
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId("game-card-link").length).toBeGreaterThan(0);
    });
  });
});
