import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";

import MediaSkeleton from ".";

describe("MediaSkeleton", () => {
  beforeEach(() => {
    render(<MediaSkeleton />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a div element with an svg icon within", () => {
    const div = screen.getByTestId("media-skeleton");
    const icon = document.querySelector("svg.tabler-icon.tabler-icon-photo");
    expect(div).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
