import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";
import { faker } from "@faker-js/faker";
import { cleanup, render, screen } from "@testing-library/react";

import PageTitle from ".";

const text = faker.lorem.words(3);

describe("PageTitle", () => {
  beforeEach(() => {
    render(<PageTitle>{text}</PageTitle>, {
      wrapper: NextIntlClientWrapper,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a heading with the correct text content", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });
});
