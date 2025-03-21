import { cleanup, render, screen, within } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { vehicleListFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import { NextIntlClientWrapper } from "@/setupTests";

import WheelRelatedVehiclesSection from ".";

describe("WheelRelatedVehiclesSection", () => {
  const vehicles = (
    vehicleListFactory(3, {
      withMedia: true,
    }) as VehicleWithMedias[]
  ).map((vehicle) => ({ vehicles: vehicle }));

  afterEach(() => {
    cleanup();
  });

  it("Does not renders anything if no vehicles are passed", () => {
    const { container } = render(
      <WheelRelatedVehiclesSection vehicles={[]} />,
      {
        wrapper: NextIntlClientWrapper,
      },
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders a section with a heading of level 2", () => {
    render(<WheelRelatedVehiclesSection vehicles={vehicles} />, {
      wrapper: NextIntlClientWrapper,
    });
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /available on/i,
    });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("Renders a list element", () => {
    render(<WheelRelatedVehiclesSection vehicles={vehicles} />, {
      wrapper: NextIntlClientWrapper,
    });
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("Renders a list item and an article for each vehicle", () => {
    render(<WheelRelatedVehiclesSection vehicles={vehicles} />, {
      wrapper: NextIntlClientWrapper,
    });
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    listItems.forEach((listItem) => {
      const article = within(listItem).getByRole("article");
      expect(listItem).toBeInTheDocument();
      expect(article).toBeInTheDocument();
    });
  });
});
