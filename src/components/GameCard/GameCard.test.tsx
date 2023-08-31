import { render, screen } from "../../tests/test-utils";
import { GameCard } from "./GameCard";
import { describe, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

const gameData = {
  id: "540",
  genre: "Shooter",
  release_date: "10-04-2022",
  developer: "Blizzard Entertainment",
  platform: "PC (Windows)",
  publisher: "Activision Blizzard",
  short_description: "short_description",
  game_url: "game_url",
  title: "Overwatch 2",
  thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
  freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
};

describe("GameCard", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <GameCard game={gameData} />
      </MemoryRouter>
    );
    expect(screen.getByTestId("game-card-link")).toBeInTheDocument();
  });
});
