import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorElement } from "./ErrorElement";

describe("ErrorElement", () => {
  it("should render correctly", () => {
    render(<ErrorElement />);
    expect(screen.getByText("Oops, something went wrong")).toBeInTheDocument();
  });
});
