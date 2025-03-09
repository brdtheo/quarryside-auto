import { IconHome } from "@tabler/icons-react";

import { afterEach, describe, expect, it } from "vitest";
import { beforeEach } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";
import { faker } from "@faker-js/faker";
import { cleanup, render, screen } from "@testing-library/react";

import HeaderSideDrawerListItem from ".";

const href = faker.internet.url();
const text = faker.lorem.word();

describe("HeaderSideDrawerListItem", () => {
  beforeEach(() => {
    render(
      <HeaderSideDrawerListItem
        icon={<IconHome />}
        href={href}
        onClick={() => {}}
      >
        {text}
      </HeaderSideDrawerListItem>,
      { wrapper: NextIntlClientWrapper },
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a list item", () => {
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();
  });

  it("Renders a link with correct href", () => {
    const link = screen.getByRole("link");
    const linkHref = link.getAttribute("href");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
    expect(linkHref).toBe(href);
  });

  it("Renders a heading with correct wording", () => {
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(text);
  });
});
