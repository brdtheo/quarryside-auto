import { cleanup, render } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import Footer from ".";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />, { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a footer element", () => {
    const footer = document.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
