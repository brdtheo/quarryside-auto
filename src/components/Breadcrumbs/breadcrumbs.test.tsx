import { usePathname } from "next/navigation";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import Breadcrumbs from ".";

describe("Breadcrumbs", () => {
  beforeEach(() => {
    render(<Breadcrumbs />, { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a list element", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("Renders a list item for home page", () => {
    const link = screen.getByRole("link", { name: "Home" });
    const href = link.getAttribute("href");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
    expect(href).toBe("/en");
  });

  it("Renders a list item for each URL slug", () => {
    const pathname = usePathname();
    const slugList = pathname
      .split("/")
      .filter((item) => !!item && item !== "en");
    const slugLinks = screen.getAllByRole("link", {
      name: slugList[0].replaceAll("-", " "),
    });
    expect(slugLinks).toHaveLength(slugList.length);
  });

  it("Renders a list item with a link as the last child", () => {
    const listItems = screen.getAllByRole("listitem");
    const lastListItem = listItems[listItems.length - 1];
    const lastListItemFirstChild = lastListItem.firstChild;
    expect(lastListItemFirstChild).not.toHaveClass("tabler-icon");
    expect(lastListItemFirstChild).toHaveRole("link");
  });
});
