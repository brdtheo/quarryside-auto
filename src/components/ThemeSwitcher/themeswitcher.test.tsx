import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import ThemeSwitcher from ".";

describe("ThemeSwitcher", () => {
  beforeEach(() => {
    localStorage.removeItem("theme");
    render(<ThemeSwitcher />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders 3 buttons with a different icon for each mode", () => {
    const iconClassNames = [
      "tabler-icon-device-desktop",
      "tabler-icon-moon",
      "tabler-icon-brightness-up",
    ];
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    for (const button of buttons) {
      expect(button).toBeInTheDocument();
    }
    for (const iconClassName of iconClassNames) {
      const buttonIcon = document.querySelector(
        `.tabler-icon.${iconClassName}`,
      );
      expect(buttonIcon).toBeInTheDocument();
      expect(buttonIcon?.tagName.toLowerCase()).toBe("svg");
    }
  });

  it("Changes the theme to light mode when on user click", async () => {
    const lightModeButton = screen.getByRole("button", {
      name: "Set color theme to light",
    });
    await userEvent.click(lightModeButton);
    const theme = localStorage.getItem("theme");
    expect(theme).toBe("light");
  });

  it("Changes the theme to dark mode when on user click", async () => {
    const darkModeButton = screen.getByRole("button", {
      name: "Set color theme to dark",
    });
    await userEvent.click(darkModeButton);
    const theme = localStorage.getItem("theme");
    expect(theme).toBe("dark");
  });
});
