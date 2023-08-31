import { describe } from "vitest";
import { useGameInfoQueryWithCache } from "./useGameInfoQueryWithCache";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { render, screen } from "../../tests/test-utils";
import { waitFor } from "@testing-library/react";
import { useGetGameListQuery } from "../gamesApi";

describe("useGameInfoQueryWithCache", () => {
  it("should receive data", async () => {
    function Game() {
      const { data, isLoading, isSuccess } = useGameInfoQueryWithCache(540);

      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          {isSuccess && (
            <div data-testid="data">
              {data !== undefined && "data received"}
            </div>
          )}
        </div>
      );
    }

    render(
      <Provider store={store}>
        <Game />
      </Provider>
    );

    await testInterface();
  });
});

describe("useGetGameListQuery", () => {
  it("should receive data", async () => {
    function List() {
      const { data, isLoading, isSuccess } = useGetGameListQuery({});

      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          {isSuccess && (
            <div data-testid="data">
              {data !== undefined && "data received"}
            </div>
          )}
        </div>
      );
    }

    render(
      <Provider store={store}>
        <List />
      </Provider>
    );

    await testInterface();
  });
});

async function testInterface() {
  await waitFor(() =>
    expect(screen.getByTestId("isLoading").textContent).toBe("true")
  );

  await waitFor(() => {
    expect(screen.getByTestId("isLoading").textContent).toBe("false");
    expect(screen.getByTestId("data").textContent).toBe("data received");
  });
}
