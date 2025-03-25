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
    expect(href).toBe("/");
  });

  it("Renders a list item for each URL slug", () => {
    const pathname = usePathname();
    const slugList = pathname.split("/");
    for (const slug of slugList) {
      const slugLink = screen.getByRole("link", {
        name: slug.replaceAll("-", " "),
      });
      expect(slugLink).toBeInTheDocument();
    }
  });

  it("Renders a list item with a link as the last child", () => {
    const listItems = screen.getAllByRole("listitem");
    const lastListItem = listItems.at(-1);
    const lastListItemFirstChild = lastListItem?.firstChild;
    expect(lastListItemFirstChild).not.toHaveClass("tabler-icon");
    expect(lastListItemFirstChild).toHaveRole("link");
  });
});
