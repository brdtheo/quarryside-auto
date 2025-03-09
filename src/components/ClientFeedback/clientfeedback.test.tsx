import dayjs from "dayjs";

import { afterEach, describe, expect, it } from "vitest";
import { beforeEach } from "vitest";

import { faker } from "@faker-js/faker";
import { cleanup, render, screen } from "@testing-library/react";

import ClientFeedback from ".";

const text = faker.lorem.words(10);
const author = faker.person.fullName();
const date = dayjs("2025-03-11").format("DD/MM/YYYY");

describe("ClientFeedback", () => {
  beforeEach(() => {
    render(
      <ClientFeedback author={author} date={date}>
        {text}
      </ClientFeedback>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders an article as container", () => {
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  it("Renders a quote with 2 quote icons", () => {
    const quote = screen.getByText(text);
    const quoteIcons = document.querySelectorAll(".tabler-icon");
    expect(quote).toBeInTheDocument();
    expect(quoteIcons).toHaveLength(2);
  });

  it("Renders the quote's author full name", () => {
    const address = screen.getByText(author);
    expect(address).toBeInTheDocument();
  });

  it("Renders the date of the quote", () => {
    const time = screen.getByRole("time");
    expect(time).toBeInTheDocument();
  });
});
