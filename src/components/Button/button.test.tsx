import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import Button from ".";

const text = faker.lorem.word({ length: 6 });

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a button element", () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole("button");
    const type = button.getAttribute("type");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type");
    expect(type).toBe("button");
  });

  it("Set the button disabled if provided from props", () => {
    render(<Button isDisabled>{text}</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("Renders a start icon if provided from props", () => {
    render(<Button startIcon={<IconArrowLeft />}>{text}</Button>);
    const startIcon = document.querySelector(".tabler-icon");
    expect(startIcon).toBeInTheDocument();
  });

  it("Renders a end icon if provided from props", () => {
    render(<Button endIcon={<IconArrowRight />}>{text}</Button>);
    const endIcon = document.querySelector(".tabler-icon");
    expect(endIcon).toBeInTheDocument();
  });

  it("Renders both start and end icon if provided from props", () => {
    render(
      <Button startIcon={<IconArrowLeft />} endIcon={<IconArrowRight />}>
        {text}
      </Button>,
    );
    const icons = document.querySelectorAll(".tabler-icon");
    expect(icons).toHaveLength(2);
  });
});
