import { afterEach, describe, expect, it } from "vitest";

import { faker } from "@faker-js/faker";
import { cleanup, render, screen } from "@testing-library/react";

import Table from ".";

const rowSingleData = [
  {
    name: faker.lorem.word(),
    data: faker.lorem.words(2),
  },
];

const rowMultipleData = [
  {
    name: faker.lorem.word(),
    data: faker.helpers.multiple(() => faker.lorem.words(2), { count: 3 }),
  },
];

describe("Table", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a table element with its body", () => {
    render(<Table rows={[]} />);
    const table = screen.getByRole("table");
    const tableBody = document.querySelector("tbody");
    expect(table).toBeInTheDocument();
    expect(tableBody).toBeInTheDocument();
  });

  it("Renders a cell correctly for each row value", () => {
    render(<Table rows={rowSingleData} />);
    const tableRow = document.querySelector("tr");
    const tableHeading = screen.getByText(rowSingleData[0].name);
    const tableData = screen.getByText(rowSingleData[0].data);
    expect(tableRow).toBeInTheDocument();
    expect(tableHeading).toBeInTheDocument();
    expect(tableData).toBeInTheDocument();
  });

  it("Renders a list with list items if row data has multiple values", () => {
    render(<Table rows={rowMultipleData} />);
    const list = screen.getByRole("list");
    rowMultipleData[0].data.forEach((data) => {
      const listItem = screen.getByText(data);
      expect(listItem).toBeInTheDocument();
      expect(listItem.tagName.toLowerCase()).toBe("li");
    });
    expect(list).toBeInTheDocument();
  });
});
