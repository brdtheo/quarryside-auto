import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";

import Advertising, { ADVERTISING_BASE_URL } from ".";

describe("Advertising", () => {
  beforeEach(() => {
    render(<Advertising ratioMode="horizontal" />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders header buttons and a link", () => {
    const headerInfoButton = screen.getByRole("button", {
      name: "Advertisement details",
    });
    const headerCloseButton = screen.getByRole("button", {
      name: "Close advertisement",
    });
    const link = screen.getByRole("button", {
      name: "Follow advertisement link",
    });
    expect(headerInfoButton).toBeInTheDocument();
    expect(headerCloseButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it("Renders an image with a random URL", () => {
    const image = screen.getByRole("img", { name: "advertisement" });
    const src = image.getAttribute("src");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(src).toContain(encodeURIComponent(ADVERTISING_BASE_URL));
  });
});
