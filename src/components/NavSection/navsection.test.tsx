import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";
import { faker } from "@faker-js/faker";
import { cleanup, render, screen, within } from "@testing-library/react";

import NavSection from ".";

const title = faker.word.noun();
const titleHref = faker.internet.url();
const links = faker.helpers.multiple(
  () => ({
    title: faker.lorem.word(),
    href: faker.internet.url(),
    isTargetBlank: true,
  }),
  { count: 3 },
);

describe("NavSection", () => {
  beforeEach(() => {
    render(<NavSection title={title} titleHref={titleHref} links={links} />, {
      wrapper: NextIntlClientWrapper,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a heading with the title text wrapped in a link", () => {
    const heading = screen.getByRole("heading", { level: 3 });
    const link = screen.getByRole("link", { name: title });
    const linkHref = link.getAttribute("href");
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
    expect(linkHref).toBe(titleHref);
  });

  it("Renders a navigation element", () => {
    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
  });

  it("Renders a list containing list items", () => {
    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
    listItems.forEach((listItem) => {
      expect(listItem).toBeInTheDocument();
    });
  });

  it("Renders each list item title in a link element", () => {
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((listItem, index) => {
      const listItemLink = within(listItem).getByRole("link", {
        name: links[index].title,
      });
      const listItemLinkHref = listItemLink.getAttribute("href");
      expect(listItemLink).toHaveTextContent(links[index].title);
      expect(listItemLink).toBeInTheDocument();
      expect(listItemLink).toHaveAttribute("href");
      expect(listItemLinkHref).toBe(links[index].href);
    });
  });

  it("Renders an external link icon if the list item is marked as target blank", () => {
    const linkIcons = document.querySelectorAll(
      "svg.tabler-icon.tabler-icon-external-link",
    );
    expect(linkIcons).toHaveLength(3);
  });
});
