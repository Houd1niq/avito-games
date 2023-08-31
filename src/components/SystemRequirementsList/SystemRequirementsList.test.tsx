import { describe, it } from "vitest";
import { render, screen } from "../../tests/test-utils";
import { SystemRequirementsList } from "./SystemRequirementsList";

describe("System", () => {
  it("should render list", () => {
    render(
      <SystemRequirementsList
        requirements={{
          graphics: "RTX 4080",
          memory: "test",
          storage: "test",
          processor: "test",
          os: "test",
        }}
      />
    );
    expect(screen.getByText("RTX 4080")).toBeInTheDocument();
  });

  it("should render no available system requirements", () => {
    render(<SystemRequirementsList requirements={undefined} />);
    expect(
      screen.getByText("No available system requirements")
    ).toBeInTheDocument();
  });
});
