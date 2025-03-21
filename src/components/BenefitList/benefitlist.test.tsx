import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import BenefitList from ".";

describe("BenefitList", () => {
  beforeEach(() => {
    render(<BenefitList />, { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a list element", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("Renders 4 list item elements", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(4);
  });
});
