import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import HeaderSideDrawer from ".";

describe("HeaderSideDrawer", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a navigation element", () => {
    render(<HeaderSideDrawer isOpen onClose={() => {}} />, {
      wrapper: NextIntlClientWrapper,
    });
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("Renders 2 list elements", () => {
    render(<HeaderSideDrawer isOpen onClose={() => {}} />, {
      wrapper: NextIntlClientWrapper,
    });
    const lists = screen.getAllByRole("list");
    lists.forEach((list) => {
      expect(list).toBeInTheDocument();
    });
  });

  it("Does not render anything if drawer is closed", () => {
    render(<HeaderSideDrawer isOpen={false} onClose={() => {}} />, {
      wrapper: NextIntlClientWrapper,
    });
    expect(() => screen.getByRole("navigation")).toThrowError();
    expect(() => screen.getAllByRole("list")).toThrowError();
  });
});
