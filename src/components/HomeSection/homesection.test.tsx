import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import HomeSection from ".";

const sectionTitle = faker.lorem.words(2);
const paragraphText = faker.lorem.paragraph();

describe("HomeSection", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a section with a title", () => {
    render(
      <HomeSection title={sectionTitle}>
        <span />
      </HomeSection>,
    );
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", { level: 2 });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(sectionTitle);
  });

  it("Renders a children element correctly", async () => {
    render(
      <HomeSection title={sectionTitle}>
        <p>{paragraphText}</p>
      </HomeSection>,
    );
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(paragraphText);
  });
});
