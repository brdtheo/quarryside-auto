import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import SubHeaderLink from ".";

const slug = faker.internet.domainWord();
const label = faker.lorem.word();

describe("SubHeaderLink", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a link element with the correct label", () => {
    render(<SubHeaderLink slug={slug} label={label} />, {
      wrapper: NextIntlClientWrapper,
    });
    const link = screen.getByRole("link");
    const linkHref = link.getAttribute("href");
    const linkButton = screen.getByText(label);
    expect(link).toBeInTheDocument();
    expect(linkHref).toBe(`/${slug}`);
    expect(linkButton).toBeInTheDocument();
  });

  it("Renders a link with no href if disabled", () => {
    render(<SubHeaderLink slug={slug} label={label} isDisabled />, {
      wrapper: NextIntlClientWrapper,
    });
    const link = screen.getByRole("link");
    const linkHref = link.getAttribute("href");
    const linkButton = screen.getByText(label);
    expect(link).toBeInTheDocument();
    expect(linkHref).toBe("#");
    expect(linkButton).toBeInTheDocument();
  });
});
