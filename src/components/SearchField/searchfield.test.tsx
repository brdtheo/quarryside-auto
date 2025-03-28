import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { afterEach, describe, expect, it, vi } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

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

  it("Renders a clear button if search field is clearable", () => {
    render(
      <SearchField
        isClearable
        value={value}
        onChange={() => {}}
        onClear={() => {}}
      />,
      {
        wrapper: NextIntlClientWrapper,
      },
    );
    const input = screen.getByRole("searchbox");
    const clearButton = screen.getByRole("button", { name: /clear/i });
    expect(input).toBeInTheDocument();
    expect(clearButton).toBeVisible();
  });

  it("Calls the onClear callback when clicking the clear button", async () => {
    const onClear = vi.fn();
    render(
      <SearchField
        isClearable
        value={value}
        onChange={() => {}}
        onClear={onClear}
      />,
      {
        wrapper: NextIntlClientWrapper,
      },
    );
    const clearButton = screen.getByRole("button", { name: /clear/i });
    await userEvent.click(clearButton);
    expect(onClear).toBeCalledTimes(1);
  });

  it("Calls the onSearch callback when pressing the enter key", async () => {
    const onSearch = vi.fn();
    render(
      <SearchField
        isClearable
        value={value}
        onChange={() => {}}
        onSearch={onSearch}
      />,
      {
        wrapper: NextIntlClientWrapper,
      },
    );
    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "[Enter]");
    expect(onSearch).toBeCalledTimes(1);
  });
});
