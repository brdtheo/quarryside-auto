import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import LocaleSwitcher from ".";

describe("LocaleSwitcher", () => {
  beforeEach(() => {
    render(<LocaleSwitcher />, {
      wrapper: NextIntlClientWrapper,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a Change Language button", () => {
    const button = screen.getByRole("button", { name: /change language/i });
    const buttonIcon = button.querySelector(
      "svg.tabler-icon.tabler-icon-world",
    );
    expect(button).toBeInTheDocument();
    expect(buttonIcon).toBeInTheDocument();
  });

  it("Renders available languages on click", async () => {
    const button = screen.getByRole("button", { name: /change language/i });
    await userEvent.click(button);
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems).toHaveLength(2);
  });

  it("Should be able to not throw an error when changing locale", async () => {
    const button = screen.getByRole("button", { name: /change language/i });
    await userEvent.click(button);
    const russianLanguageMenuItem = screen.getByRole("menuitem", {
      name: /russian/i,
    });
    expect(async () => {
      await userEvent.click(russianLanguageMenuItem);
    }).not.toThrowError();
  });
});
