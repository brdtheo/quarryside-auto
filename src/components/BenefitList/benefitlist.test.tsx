import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import BenefitList from ".";

describe("BenefitList", () => {
  beforeEach(async () => {
    render(await BenefitList());
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
