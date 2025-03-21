import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import BlogPostList from ".";

describe("BlogPostList", () => {
  beforeEach(() => {
    render(<BlogPostList />, { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a section element with a heading containing the good wording", () => {
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /latest blog posts/i,
    });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("Renders a list element", () => {
    const list = document.querySelector("section")?.lastElementChild;
    expect(list).toBeInTheDocument();
  });

  it("Renders 3 list item elements", () => {
    const list = document.querySelector("section")?.lastElementChild;
    const listItems = list?.childNodes;
    expect(listItems).toHaveLength(3);
    (listItems ?? []).forEach((listItem) => {
      expect(listItem).toBeInTheDocument();
    });
  });
});
