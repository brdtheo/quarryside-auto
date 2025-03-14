import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import Select from ".";

const placeholder = faker.string.alpha(10);
const options = faker.helpers.multiple(
  () => ({
    label: faker.lorem.words(2),
    value: faker.string.alpha(5),
  }),
  { count: 3 },
);

describe("Select", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a select element", () => {
    render(<Select options={options} value="" onChange={() => {}} />);
    const select = document.querySelector("select");
    expect(select).toBeInTheDocument();
  });

  it("Renders an additional option if placeholder is passed", () => {
    render(
      <Select
        placeholder={placeholder}
        options={options}
        value=""
        onChange={() => {}}
      />,
    );
    const placeholderOption = screen.getByRole("option", {
      name: placeholder,
    });
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toBeDisabled();
  });

  it("Renders all option elements correctly", () => {
    render(<Select options={options} value="" onChange={() => {}} />);
    const optionElements = screen.getAllByRole("option");
    expect(optionElements).toHaveLength(options.length);
    optionElements.forEach((optionElement) => {
      expect(optionElement).toBeInTheDocument();
    });
  });
});
