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

  it("Renders a start icon if provided from props", () => {
    render(<Chip startIcon={IconX}>{text}</Chip>);
    const startIcon = document.querySelector(".tabler-icon");
    expect(startIcon).toBeInTheDocument();
  });

  it("Renders a end icon if provided from props", () => {
    render(<Chip endIcon={IconX}>{text}</Chip>);
    const endIcon = document.querySelector(".tabler-icon");
    expect(endIcon).toBeInTheDocument();
  });

  it("Renders a link for icons when passing href prop", () => {
    render(
      <Chip endIcon={IconX} iconHref={href}>
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
