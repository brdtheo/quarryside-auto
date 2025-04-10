import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { wheelListFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import WheelList from ".";

describe("WheelList", () => {
  const wheels = wheelListFactory(5, {
    withMedia: true,
  }) as WheelWithMedias[];

  afterEach(() => {
    cleanup();
  });

  it("Renders a placeholder if no data to display", () => {
    render(<WheelList data={[]} itemRender={() => {}} />);
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
    render(<WheelList data={wheels} itemRender={() => {}} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("Renders the item render elements", () => {
    render(
      <WheelList
        data={wheels}
        itemRender={(wheel) => (
          <li key={wheel.id}>
            <h1>{wheel.brand}</h1>
            <p>{wheel.model}</p>
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
