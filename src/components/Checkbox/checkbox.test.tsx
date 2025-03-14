import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Checkbox from ".";

const id = faker.string.uuid();
const label = faker.lorem.word();
const href = faker.internet.url();

describe("Checkbox", () => {
  beforeEach(() => {
    render(<Checkbox id={id} label={label} href={href} checked />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a read-only input with type checkbox", () => {
    const input = screen.getByRole("checkbox");
    const inputTypeAttribute = input.getAttribute("type");
    const inputNameAttribute = input.getAttribute("name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("readonly");
    expect(input).toHaveAttribute("type");
    expect(inputTypeAttribute).toBe("checkbox");
    expect(inputNameAttribute).toBe(id);
  });

  it("Renders a label with 'for' attribute set to passed id", () => {
    const labelElement = screen.getByText(label);
    const labelForAttribute = labelElement.getAttribute("for");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute("for");
    expect(labelForAttribute).toBe(id);
  });

  it("Renders a link with href attribute", () => {
    const link = screen.getByRole("link");
    const linkHrefAttribute = link.getAttribute("href");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
    expect(linkHrefAttribute).toBe(href);
  });

  it("Set the checked attribute when passed as prop", () => {
    const input = screen.getByRole("checkbox");
    expect(input).toHaveAttribute("checked");
  });
});
