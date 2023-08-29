import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import EmptyState from "../components/EmptyState";

describe("EmptyState Component", () => {
  it("Renders EmptyState component correctly", () => {
    const { container } = render(
      <EmptyState text="Example Text" img="image.png" />
    );
    expect(container).toBeInTheDocument();
  });

  it("Displays provided text correctly", () => {
    const { getByText } = render(
      <EmptyState text="Example Text" img="image.png" />
    );
    const textElement = getByText("Example Text");
    expect(textElement).toBeInTheDocument();
  });

  it("Displays provided image correctly", () => {
    const { getByTestId } = render(
      <EmptyState text="Example Text" img="image.png" />
    );
    const imageElement = getByTestId("empty-state-image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "image.png");
  });

  it("Applies styles correctly to the component", () => {
    const { getByTestId } = render(
      <EmptyState text="Example Text" img="image.png" />
    );
    const emptyStateContainer = getByTestId("empty-state-container");
    const emptyStateImage = getByTestId("empty-state-image");
    const emptyStateText = getByTestId("empty-state-text");

    expect(emptyStateContainer).toHaveStyleRule("display", "flex");
    expect(emptyStateImage).toHaveStyleRule("width", "200px");
    expect(emptyStateText).toHaveStyleRule("font-weight", "bold");
  });

  it("Checks that child components are rendered correctly", () => {
    const { getByTestId } = render(
      <EmptyState text="Example Text" img="image.png" />
    );
    const emptyStateContent = getByTestId("empty-state-content");
    const emptyStateImage = getByTestId("empty-state-image");
    const emptyStateText = getByTestId("empty-state-text");

    expect(emptyStateContent).toContainElement(emptyStateImage);
    expect(emptyStateContent).toContainElement(emptyStateText);
  });
});
