import { IconX } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import Chip from ".";

const text = faker.lorem.word();
const href = faker.internet.url();

describe("Chip", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a text span wrapped in a div", () => {
    render(<Chip>{text}</Chip>);
    const span = screen.getByText(text);
    expect(span).toBeInTheDocument();
  });

  it("Renders a left icon if provided from props", () => {
    render(<Chip leftIcon={<IconX />}>{text}</Chip>);
    const leftIcon = document.querySelector(".tabler-icon");
    expect(leftIcon).toBeInTheDocument();
  });

  it("Renders a right icon if provided from props", () => {
    render(<Chip rightIcon={<IconX />}>{text}</Chip>);
    const rightIcon = document.querySelector(".tabler-icon");
    expect(rightIcon).toBeInTheDocument();
  });

  it("Renders a link for icons when passing href prop", () => {
    render(
      <Chip rightIcon={<IconX />} iconHref={href}>
        {text}
      </Chip>,
    );
    const link = screen.getByRole("link");
    const linkHrefAttribute = link.getAttribute("href");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
    expect(linkHrefAttribute).toBe(href);
  });
});
