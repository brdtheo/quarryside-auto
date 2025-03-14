import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import Header from ".";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />, { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a header element", () => {
    const header = document.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  it("Renders a navigation element", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("Renders 4 link elements", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });

  it("Renders a menu icon button", () => {
    const button = screen.getByRole("navigation");
    const buttonIcon = document.querySelector(".tabler-icon");
    expect(button).toBeInTheDocument();
    expect(buttonIcon).toBeInTheDocument();
  });
});
