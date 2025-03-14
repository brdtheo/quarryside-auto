import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import DetailSection from ".";

const sectionTitle = faker.lorem.words(2);
const buttonText = faker.lorem.word();
const paragraphText = faker.lorem.paragraph();
const quoteText = faker.lorem.sentence();

describe("DetailSection", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a section with a title", () => {
    render(
      <DetailSection title={sectionTitle}>
        <span />
      </DetailSection>,
    );
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", { level: 2 });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(sectionTitle);
  });

  it("Renders a children element correctly", async () => {
    render(
      <DetailSection title={sectionTitle}>
        <button>{buttonText}</button>
      </DetailSection>,
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText);
  });

  it("Renders an array of children element correctly", async () => {
    render(
      <DetailSection title={sectionTitle}>
        <p>{paragraphText}</p>
        <q>{quoteText}</q>
        <button>{buttonText}</button>
      </DetailSection>,
    );
    const paragraph = screen.getByRole("paragraph");
    const quote = screen.getByText(quoteText);
    const button = screen.getByRole("button");
    expect(paragraph).toBeInTheDocument();
    expect(quote).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
