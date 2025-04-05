import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import ListFilterHeader from ".";

const resultCount = faker.number.int({ min: 1, max: 1000 });
const activeFilterCount = faker.number.int(50);
const query = faker.lorem.word(8);

describe("ListFilterHeader", () => {
  beforeEach(() => {
    render(
      <ListFilterHeader
        pageSearchParams={{ q: query }}
        resultCount={resultCount}
        activeFilterCount={activeFilterCount}
        handleOpenFilterDrawer={() => {}}
      />,
      { wrapper: NextIntlClientWrapper },
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a paragraph with the result count", () => {
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(`${resultCount} result(s)`);
  });

  it("Renders two search box elements", () => {
    const searchFields = screen.getAllByRole("searchbox");
    expect(searchFields).toHaveLength(2);
    for (const searchField of searchFields) {
      expect(searchField).toBeInTheDocument();
    }
  });

  it("Set the field value to the query param if existing", () => {
    const searchField = screen.getAllByRole("searchbox")[0];
    expect(searchField).toHaveValue(query);
  });

  it("Triggers the search callback without throwing any error when pressing enter", async () => {
    const searchField = screen.getAllByRole("searchbox")[0];
    await userEvent.type(searchField, "[Enter]");
  });

  it("Removes the current input value when clearing the field", async () => {
    const searchField = screen.getAllByRole("searchbox")[0];
    const clearButton = screen.getAllByRole("button", { name: /clear/i })[0];
    await userEvent.click(clearButton);
    const searchFieldValue = searchField.getAttribute("value");
    expect(searchFieldValue).toBe("");
  });
});
