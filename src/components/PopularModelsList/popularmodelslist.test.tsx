import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { vehicleListFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import { NextIntlClientWrapper } from "@/setupTests";

import PopularModelsList from ".";

const vehicles = vehicleListFactory(3, {
  withMedia: true,
}) as VehicleWithMedias[];

describe("PopularModelsList", () => {
  afterEach(() => {
    cleanup();
  });

  it("Does not render anything if no vehicles are provided", () => {
    const { container } = render(<PopularModelsList vehicles={[]} />, {
      wrapper: NextIntlClientWrapper,
    });
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders a section with a heading of level 2", () => {
    render(<PopularModelsList vehicles={vehicles} />, {
      wrapper: NextIntlClientWrapper,
    });
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /most popular models/i,
    });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("Renders a list element", () => {
    render(<PopularModelsList vehicles={vehicles} />, {
      wrapper: NextIntlClientWrapper,
    });
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("Renders a list item and article for each vehicle passed", () => {
    render(<PopularModelsList vehicles={vehicles} />, {
      wrapper: NextIntlClientWrapper,
    });
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    listItems.forEach((listItem) => {
      expect(listItem).toBeInTheDocument();
    });
  });
});
