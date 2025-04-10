import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { vehicleListFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import VehicleList from ".";

describe("VehicleList", () => {
  const vehicles = vehicleListFactory(5, {
    withMedia: true,
  }) as VehicleWithMedias[];

  afterEach(() => {
    cleanup();
  });

  it("Renders a placeholder if no data to display", () => {
    render(<VehicleList data={[]} itemRender={() => {}} />);
    const list = screen.queryByRole("list");
    const listItem = screen.queryByRole("listitem");
    const heading = screen.getByRole("heading", { level: 2 });
    const paragraph = screen.getByRole("paragraph");
    const icon = document.querySelector(
      "svg.tabler-icon.tabler-icon-zoom-exclamation",
    );
    expect(list).not.toBeInTheDocument();
    expect(listItem).not.toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("Renders a list element", () => {
    render(<VehicleList data={vehicles} itemRender={() => {}} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("Renders the item render elements", () => {
    render(
      <VehicleList
        data={vehicles}
        itemRender={(vehicle) => (
          <li key={vehicle.slug}>
            <h1>{vehicle.model}</h1>
            <p>{vehicle.description}</p>
          </li>
        )}
      />,
    );
    const listItems = screen.getAllByRole("listitem");
    const headings = screen.getAllByRole("heading");
    const paragraphs = screen.getAllByRole("paragraph");
    expect(listItems).toHaveLength(5);
    expect(headings).toHaveLength(5);
    expect(paragraphs).toHaveLength(5);
  });
});
