import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import ListFilterHeader from ".";

const resultCount = faker.number.int({ min: 1, max: 1000 });
const activeFilterCount = faker.number.int(50);

describe("ListFilterHeader", () => {
  beforeEach(() => {
    render(
      <ListFilterHeader
        resultCount={resultCount}
        activeFilterCount={activeFilterCount}
        handleOpenFilterDrawer={() => {}}
      />,
      { wrapper: NextIntlClientWrapper },
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders all icon buttons for mobile display", () => {
    const iconButtons = screen.getAllByRole("button");
    const iconButtonsSVG = document.querySelectorAll("svg");
    expect(iconButtons).toHaveLength(3);
    expect(iconButtonsSVG).toHaveLength(3);
    for (const iconButton of iconButtons) {
      expect(iconButton).toBeInTheDocument();
    }
    for (const svg of iconButtonsSVG) {
      expect(svg).toBeInTheDocument();
    }
  });

  it("Renders a paragraph with the result count", () => {
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(`${resultCount} result(s)`);
  });
});
