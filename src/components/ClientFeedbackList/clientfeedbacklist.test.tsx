import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";
import { beforeEach } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import ClientFeedbackList from ".";

describe("ClientFeedbackList", () => {
  beforeEach(() => {
    render(<ClientFeedbackList />, { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a list with 3 list items", () => {
    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
    listItems.forEach((listItem) => {
      expect(listItem).toBeInTheDocument();
    });
  });

  it("Renders 3 quote elements", () => {
    const quotes = document.querySelectorAll("q");
    expect(quotes).toHaveLength(3);
    quotes.forEach((quote) => {
      expect(quote).toBeInTheDocument();
    });
  });
});
