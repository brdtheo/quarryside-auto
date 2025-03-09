import { afterEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";
import { cleanup, render, screen } from "@testing-library/react";

import ListFilterAside from ".";

describe("ListFilterAside", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders an aside and form element if props are empty", () => {
    render(<ListFilterAside sections={[]} searchParams={{}} nameSpace="" />, {
      wrapper: NextIntlClientWrapper,
    });
    const aside = screen.getByRole("complementary");
    const form = screen.getByRole("form");
    expect(aside).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });

  it("Renders 2 advertising elements", () => {
    render(<ListFilterAside sections={[]} searchParams={{}} nameSpace="" />, {
      wrapper: NextIntlClientWrapper,
    });
    const links = screen.getAllByRole("button", {
      name: "Follow advertisement link",
    });
    expect(links).toHaveLength(2);
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
