import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import SubHeader from ".";

describe("SubHeader", () => {
  beforeEach(() => {
    render(<SubHeader />, { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a navigation element", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});
