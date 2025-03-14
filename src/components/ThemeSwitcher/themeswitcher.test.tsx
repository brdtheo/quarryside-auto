import { cleanup, fireEvent, render, screen } from "@testing-library/react";

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
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    iconClassNames.forEach((iconClassName) => {
      const buttonIcon = document.querySelector(
        `.tabler-icon.${iconClassName}`,
      );
      expect(buttonIcon).toBeInTheDocument();
      expect(buttonIcon?.tagName.toLowerCase()).toBe("svg");
    });
  });

  it("Changes the theme to light mode when on user click", () => {
    const lightModeButton = screen.getByRole("button", {
      name: "Set color theme to light",
    });
    fireEvent(
      lightModeButton,
      new MouseEvent("click", { bubbles: true, cancelable: true }),
    );
    const theme = localStorage.getItem("theme");
    expect(theme).toBe("light");
  });

  it("Changes the theme to dark mode when on user click", () => {
    const darkModeButton = screen.getByRole("button", {
      name: "Set color theme to dark",
    });
    fireEvent(
      darkModeButton,
      new MouseEvent("click", { bubbles: true, cancelable: true }),
    );
    const theme = localStorage.getItem("theme");
    expect(theme).toBe("dark");
  });
});
