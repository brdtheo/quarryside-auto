import { afterEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";
import { faker } from "@faker-js/faker";
import { cleanup, render, screen } from "@testing-library/react";

import SearchField from ".";

const value = faker.string.alpha(10);

describe("SearchField", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a div element with a search role", () => {
    render(<SearchField value="" onChange={() => {}} />, {
      wrapper: NextIntlClientWrapper,
    });
    const div = screen.getByRole("search");
    expect(div).toBeInTheDocument();
  });

  it("Renders an input element with the correct passed value", () => {
    render(<SearchField value={value} onChange={() => {}} />, {
      wrapper: NextIntlClientWrapper,
    });
    const input = screen.getByRole("searchbox");
    const inputValue = input.getAttribute("value");
    const inputType = input.getAttribute("type");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type");
    expect(inputValue).toBe(value);
    expect(inputType).toBe("search");
  });

  it("Renders a search icon within the div element", () => {
    render(<SearchField value="" onChange={() => {}} />, {
      wrapper: NextIntlClientWrapper,
    });
    const input = screen.getByRole("searchbox");
    const icon = document.querySelector("svg.tabler-icon.tabler-icon-search");
    expect(input).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("Renders a disabled input if disabled prop is passed", () => {
    render(<SearchField isDisabled value="" onChange={() => {}} />, {
      wrapper: NextIntlClientWrapper,
    });
    const input = screen.getByRole("searchbox");
    expect(input).toBeDisabled();
  });
});
