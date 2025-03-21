import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import Container from ".";

const text = faker.lorem.sentence();

describe("Container", () => {
  afterEach(() => {
    cleanup();
  });

  it("Does not render anything if no children is passed", () => {
    // @ts-expect-error We simulate an unexpected behavior
    const { container } = render(<Container />);
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders a wrapper with its children elements", () => {
    render(
      <Container>
        <p>{text}</p>
      </Container>,
    );
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(text);
  });
});
