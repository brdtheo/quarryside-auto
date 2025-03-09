import { getTranslations } from "next-intl/server";

import { afterEach, describe, expect, it } from "vitest";
import { beforeEach } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";

import ClientFeedbackList from ".";

describe("ClientFeedbackList", () => {
  beforeEach(async () => {
    render(await ClientFeedbackList());
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

  it("Renders 3 quotes with the correct wording", async () => {
    const t = await getTranslations("home");
    const quotes = document.querySelectorAll("q");
    expect(quotes).toHaveLength(3);
    quotes.forEach((quote, i) => {
      expect(quote).toHaveTextContent(t(`feedback.${i}.quote`));
    });
  });
});
