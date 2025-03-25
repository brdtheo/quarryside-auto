import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    for (const link of links) {
      expect(link).toBeInTheDocument();
    }
  });

  it("Renders a menu icon button", () => {
    const button = screen.getByRole("navigation");
    const buttonIcon = document.querySelector(".tabler-icon");
    expect(button).toBeInTheDocument();
    expect(buttonIcon).toBeInTheDocument();
  });

  it("Makes the document not scrollable when opening a side drawer", async () => {
    const sideDrawerButton = screen.getByRole("button");
    await userEvent.click(sideDrawerButton);
    expect(document.body).toHaveClass("overflow-hidden");
  });

  it("Makes the document scrollable again when closing the side drawer", async () => {
    const sideDrawerButton = screen.getByRole("button");
    await userEvent.click(sideDrawerButton);
    const closeDrawerButton = screen.getByRole("button", {
      name: /close side drawer/i,
    });
    await userEvent.click(closeDrawerButton);
    expect(document.body).not.toHaveClass("overflow-hidden");
  });
});
