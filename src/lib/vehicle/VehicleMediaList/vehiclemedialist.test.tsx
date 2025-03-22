import { cleanup, render, screen, within } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { vehicleFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import MediaList from ".";

describe("MediaList", () => {
  const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;

  beforeEach(() => {
    render(<MediaList vehicle={vehicle} />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Does not renders anything if vehicle is not passed", () => {
    // @ts-expect-error We simulate an unexpected behavior
    const { container } = render(<MediaList vehicle={undefined} />);
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
    expect(listItems).toHaveLength(vehicle.medias.length);
    listItems.forEach((listItem) => {
      const button = within(listItem).getByRole("button", { name: /media/i });
      const image = within(button).getByRole("img");
      expect(image).toHaveAttribute("src");
    });
  });
});
