import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import TextField from ".";

const value = faker.lorem.words(2);
const placeholder = faker.lorem.word();

describe("TextField", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a textarea element if isTextArea prop is passed", () => {
    render(<TextField value="" isTextArea placeholder={placeholder} />);
    const textarea = screen.getByRole("textbox");
    const textareaPlaceholder = textarea.getAttribute("placeholder");
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
    expect(textareaPlaceholder).toBe(placeholder);
  });

  it("Renders an input element with text type", () => {
    render(<TextField value="" placeholder="" />);
    const input = screen.getByRole("textbox");
    const inputType = input.getAttribute("type");
    expect(input).toBeInTheDocument();
    expect(input.tagName.toLowerCase()).toBe("input");
    expect(inputType).toBe("text");
  });

  it("Renders the field element with the placeholder set correctly", () => {
    render(<TextField value="" placeholder={placeholder} />);
    const input = screen.getByRole("textbox");
    const inputPlaceholder = input.getAttribute("placeholder");
    expect(inputPlaceholder).toBe(placeholder);
  });

  it("Renders the field element with the value set correctly", () => {
    render(<TextField value={value} placeholder="" />);
    const input = screen.getByRole("textbox");
    const inputValue = input.getAttribute("value");
    expect(inputValue).toBe(value);
  });
});
