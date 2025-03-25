import { Prisma } from "@prisma/client";

import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import Rating from ".";

const score = new Prisma.Decimal(
  faker.number.int({ min: 0, multipleOf: 1, max: 5 }),
);

describe("Rating", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders related elements even if score is not provided", () => {
    // @ts-expect-error We simulate an unexpected behavior
    const { container } = render(<Rating />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it("Renders a span element with the score as text content", () => {
    render(<Rating score={score} />);
    const span = screen.getByText(`${score}`);
    expect(span).toBeInTheDocument();
    expect(span.tagName.toLowerCase()).toBe("span");
  });

  it("Renders always 5 svg elements whatever the score is", () => {
    render(<Rating score={score} />);
    const SVGElements = document.querySelectorAll(
      "svg.tabler-icon.tabler-icon-star",
    );
    expect(SVGElements).toHaveLength(5);
  });
});
