import { getTranslations } from "next-intl/server";

import { cleanup, render, screen, within } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";
import { beforeEach } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import HomeHero from ".";

describe("HomeHero", () => {
  beforeEach(async () => {
    render(await HomeHero(), { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a presentation div element", () => {
    const div = screen.getByRole("presentation");
    expect(div).toBeInTheDocument();
  });

  it("Renders an image with a correct src path", () => {
    const div = screen.getByRole("presentation");
    const image = within(div).getByRole("img");
    const imageAlt = image.getAttribute("alt");
    const imageSrc = image.getAttribute("src");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
    expect(imageAlt).toBe("Lined Ibishu Pessima cars");
    expect(imageSrc).toContain(
      "quarryside-auto-misc.s3.eu-west-3.amazonaws.com",
    );
  });

  it("Renders a heading of level 1", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("Renders a link that leads to vehicles page", async () => {
    const t = await getTranslations("home");
    const vehicleLink = screen.getAllByRole("link")[0];
    const vehicleLinkHref = vehicleLink.getAttribute("href");
    const linkText = screen.getByText(t("hero.browseUsedCars"));
    expect(vehicleLink).toBeInTheDocument();
    expect(vehicleLink).toHaveAttribute("href");
    expect(vehicleLinkHref).toBe("/vehicles");
    expect(linkText).toBeInTheDocument();
  });

  it("Renders a link that leads to wheels page", async () => {
    const t = await getTranslations("home");
    const wheelLink = screen.getAllByRole("link")[1];
    const wheelLinkHref = wheelLink.getAttribute("href");
    const linkText = screen.getByText(t("hero.browseRimsTires"));
    expect(wheelLink).toBeInTheDocument();
    expect(wheelLink).toHaveAttribute("href");
    expect(wheelLinkHref).toBe("/wheels");
    expect(linkText).toBeInTheDocument();
  });
});
