import { cleanup, render, screen, within } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { wheelFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import MediaList from ".";

describe("MediaList", () => {
  const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;

  beforeEach(() => {
    render(<MediaList wheel={wheel} />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Does not renders anything if wheel is not passed", () => {
    // @ts-expect-error We simulate an unexpected behavior
    const { container } = render(<MediaList wheel={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders the thumbnail image", () => {
    const button = screen.getByRole("button", { name: /thumbnail/i });
    const image = within(button).getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  it("Renders all media preview", () => {
    const list = screen.getByRole("list");
    const listItems = within(list).getAllByRole("listitem");
    expect(listItems).toHaveLength(wheel.medias.length);
    for (const listItem of listItems) {
      const button = within(listItem).getByRole("button", { name: /media/i });
      const image = within(button).getByRole("img");
      expect(image).toHaveAttribute("src");
    }
  });
});
