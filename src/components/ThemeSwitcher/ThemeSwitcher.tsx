"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  IconBrightnessUp,
  IconDeviceDesktop,
  IconMoon,
} from "@tabler/icons-react";

import clsx from "clsx";

const ICON_SIZE = 14;

export default function ThemeSwitcher() {
  // A local state sync with local storage theme
  const [syncTheme, setSyncTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      syncTheme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, [syncTheme]);

  useEffect(() => {
    const localStorageTheme = localStorage.theme;
    if (localStorageTheme !== syncTheme) {
      setSyncTheme(localStorageTheme);
    }
  }, []);

  const handleSetTheme = useCallback(
    (theme: "light" | "dark" | null) => () => {
      setSyncTheme(theme);
      return theme
        ? localStorage.setItem("theme", theme)
        : localStorage.removeItem("theme");
    },
    [],
  );

  const baseButtonClassname = useMemo(
    () => "justify-center items-center p-1 border rounded-2xl",
    [],
  );

  return (
    <div className="flex rounded-2xl border border-divider w-fit h-fit">
      <button
        aria-label="Set color theme to system default"
        role="button"
        className={clsx(baseButtonClassname, {
          "border-grey-secondary bg-white text-black": !syncTheme,
          "border-transparent text-white hover:text-gray-300": !!syncTheme,
        })}
        onClick={handleSetTheme(null)}
      >
        <IconDeviceDesktop color="currentColor" size={ICON_SIZE} stroke={2} />
      </button>
      <button
        aria-label="Set color theme to dark"
        role="button"
        className={clsx(baseButtonClassname, {
          "border-grey-secondary bg-white text-black": syncTheme === "dark",
          "border-transparent text-white hover:text-gray-300":
            syncTheme !== "dark",
        })}
        onClick={handleSetTheme("dark")}
      >
        <IconMoon color="currentColor" size={ICON_SIZE} stroke={2} />
      </button>
      <button
        name="light"
        aria-label="Set color theme to light"
        role="button"
        className={clsx(baseButtonClassname, {
          "bg-white text-primary": syncTheme === "light",
          "border-transparent text-white hover:text-gray-300":
            syncTheme !== "light",
        })}
        onClick={handleSetTheme("light")}
      >
        <IconBrightnessUp color="currentColor" size={ICON_SIZE} stroke={2} />
      </button>
    </div>
  );
}
