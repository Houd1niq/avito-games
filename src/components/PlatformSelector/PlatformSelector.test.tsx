import { describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { PlatformSelector } from "./PlatfromSelector";

describe("Platform selector", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <PlatformSelector />
      </Provider>
    );
    expect(screen.getByText("All")).toBeInTheDocument();
  });
});
