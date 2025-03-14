import { IconCalendarTime } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import BenefitCard from ".";

const title = faker.word.adjective();
const description = faker.lorem.paragraph();

describe("BenefitCard", () => {
  beforeEach(() => {
    render(
      <BenefitCard
        title={title}
        description={description}
        icon={<IconCalendarTime stroke={1.5} size={64} />}
      />,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders an article element", () => {
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  it("Renders an SVG element", () => {
    const svg = document.querySelector(".tabler-icon");
    expect(svg).toBeInTheDocument();
  });

  it("Renders a heading with provided text", () => {
    const heading = screen.getByRole("heading", { name: title, level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("Renders a paragraph with provided text", () => {
    const paragraph = screen.getByText(description);
    expect(paragraph).toBeInTheDocument();
  });
});
