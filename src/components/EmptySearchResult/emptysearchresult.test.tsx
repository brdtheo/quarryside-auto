import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import EmptySearchResult from ".";

const title = faker.lorem.words(3);

describe("EmptySearchResult", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a section element", () => {
    render(<EmptySearchResult title={title} />);
    const section = document.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section).toBeVisible();
  });

  it("Renders an icon element", () => {
    render(<EmptySearchResult title={title} />);
    const icon = document.querySelector(
      "svg.tabler-icon.tabler-icon-zoom-exclamation",
    );
    expect(icon).toBeInTheDocument();
    expect(icon).toBeVisible();
  });

  it("Renders a heading of level 2 and a paragraph within the section", () => {
    render(<EmptySearchResult title={title} />);
    const heading = screen.getByRole("heading", { level: 2, name: title });
    const paragraph = screen.getByRole("paragraph");
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeVisible();
  });
});
