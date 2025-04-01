import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import Advertising, { ADVERTISING_BASE_URL } from ".";

describe("Advertising", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should not render anything if no image is generated", () => {
    const { container } = render(<Advertising />);
    const image = screen.queryByRole("img", { name: "advertisement" });
    const link = screen.queryByRole("link", {
      name: "Follow advertisement link",
    });
    expect(image).not.toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders header buttons and a link", () => {
    render(<Advertising ratioMode="horizontal" />);
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
    render(<Advertising ratioMode="horizontal" />);
    const image = screen.getByRole("img", { name: "advertisement" });
    const src = image.getAttribute("src");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(src).toContain(ADVERTISING_BASE_URL);
  });
});
