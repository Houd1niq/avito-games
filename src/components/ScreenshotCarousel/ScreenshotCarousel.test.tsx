import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

describe("ScreenshotCarousel", () => {
  it("should render carousel", () => {
    render(
      <ScreenshotCarousel screenshots={[{ id: 1, image: "some_img.jpg" }]} />
    );
    expect(screen.getByRole("heading", { level: 2 }));
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });

  it("should render no available screenshots", () => {
    render(<ScreenshotCarousel screenshots={[]} />);
    expect(screen.getByText("No available screenshots"));
  });
});
