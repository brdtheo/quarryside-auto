import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import ListFilterAsideSection from ".";

const title = faker.lorem.words(2);
const count = faker.number.int({ min: 1, max: 99 });
const optionLabel = faker.word.noun();
const options = faker.helpers.multiple(
  () => ({
    label: optionLabel,
    value: faker.string.alphanumeric(5).toUpperCase(),
    isChecked: faker.datatype.boolean(0.4),
    href: faker.internet.url(),
  }),
  { count: 3 },
);

describe("ListFilterAsideSection", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a fieldset with a legend containing the title", () => {
    render(
      <ListFilterAsideSection
        title={title}
        options={[]}
        selectedOptionCount={0}
      />,
    );
    const fieldset = screen.getByRole("group");
    const legend = screen.getByText(title);
    expect(fieldset).toBeInTheDocument();
    expect(legend).toBeInTheDocument();
  });

  it("Renders a chip next to the title if option count is positive", () => {
    render(
      <ListFilterAsideSection
        title={title}
        options={[]}
        selectedOptionCount={count}
      />,
    );
    const chipContainer = screen.getByTestId("chip");
    const chipText = screen.getByText(count);
    expect(chipContainer).toBeInTheDocument();
    expect(chipText).toBeInTheDocument();
  });

  it("Renders options correctly", () => {
    render(
      <ListFilterAsideSection
        title={title}
        options={options}
        selectedOptionCount={count}
      />,
    );
    const links = screen.getAllByRole("link");
    const inputs = screen.getAllByRole("checkbox");
    const inputCheckIcons = document.querySelectorAll(".tabler-icon");
    const labels = screen.getAllByLabelText(optionLabel);
    expect(links).toHaveLength(3);
    expect(inputs).toHaveLength(3);
    expect(inputCheckIcons).toHaveLength(3);
    expect(labels).toHaveLength(3);
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href");
    });
    inputs.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("name");
    });
  });

  it("Does not render a search field if not searchable", () => {
    render(
      <ListFilterAsideSection
        title={title}
        options={options}
        selectedOptionCount={count}
      />,
    );
    const searchInput = screen.queryByRole("searchbox");
    expect(searchInput).not.toBeInTheDocument();
  });

  it("Renders a search field if searchable", () => {
    render(
      <ListFilterAsideSection
        title={title}
        options={options}
        selectedOptionCount={count}
        isSearchable
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();
  });
});
