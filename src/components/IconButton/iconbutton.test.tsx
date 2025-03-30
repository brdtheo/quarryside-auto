import { IconMenu } from "@tabler/icons-react";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import IconButton from ".";

describe("IconButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a button element", () => {
    render(<IconButton icon={IconMenu} onClick={() => {}} />);
    const button = screen.getByRole("button");
    const type = button.getAttribute("type");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type");
    expect(type).toBe("button");
  });

  it("Set the button disabled if provided from props", () => {
    render(<IconButton icon={IconMenu} disabled onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("Renders a badge if a badge count value is passed", () => {
    render(<IconButton icon={IconMenu} badgeCount={6} onClick={() => {}} />);
    const span = screen.getByText(6);
    expect(span).toBeInTheDocument();
  });

  it("Renders a badge with text 99+ if count value is more than 99", () => {
    render(<IconButton icon={IconMenu} badgeCount={100} onClick={() => {}} />);
    const span = screen.getByText("99+");
    expect(span).toBeVisible();
  });
});
