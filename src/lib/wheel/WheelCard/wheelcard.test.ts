import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { wheelFactory } from "@/lib/wheel/factory";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";
import { WheelWithMedias } from "@/lib/wheel/types";

import { getPrice } from "@/utils";

import { NextIntlClientWrapper } from "@/setupTests";

import WheelCard from ".";

describe("WheelCard", async () => {
  const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;
  const {
    result: { current },
  } = renderHook(async () => await useWheelDetails(wheel));
  const wheelDetails = await current;

  beforeEach(async () => {
    render(
      await WheelCard({
        wheel,
      }),
      {
        wrapper: NextIntlClientWrapper,
      },
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders an article element", () => {
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  it("Renders a link with a valid href attribute", () => {
    const link = screen.getByRole("link");
    const linkHref = link.getAttribute("href");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
    expect(linkHref).toContain(`/wheels/${encodeURIComponent(wheel.slug)}`);
  });

  it("Renders an image element if a thumbnail is available", () => {
    const thumbnail = wheel.medias.find((media) => media.is_thumbnail);
    if (!thumbnail) return;
    const image = screen.getByRole("img");
    const imageSrc = image.getAttribute("src");
    const imagAlt = image.getAttribute("alt");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
    expect(imageSrc).toBeTruthy();
    expect(imagAlt).toBeTruthy();
  });

  it("Does not render an image element if no thumbnail available", () => {
    const thumbnail = wheel.medias.find((media) => media.is_thumbnail);
    if (thumbnail) return;
    const image = screen.queryByRole("img");
    expect(image).not.toBeInTheDocument();
  });

  it("Renders the wheel's brand", () => {
    const brand = screen.getByText(wheelDetails.brand);
    expect(brand).toBeInTheDocument();
  });

  it("Renders the wheel's model", () => {
    if (!wheel.model) return;
    const brand = screen.getByText(wheel.model);
    expect(brand).toBeInTheDocument();
  });

  it("Renders a list and list item if wheel is available for delivery", () => {
    if (!wheel.delivery_available) return;
    const list = screen.getByRole("list");
    const listItem = document
      .querySelector("svg.tabler-icon.tabler-icon-truck-delivery")
      ?.closest("li");
    expect(list).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
  });

  it("Renders a list and list item if wheel has free on site pickup", () => {
    if (!wheel.free_on_site_pickup) return;
    const list = screen.getByRole("list");
    const listItem = document
      .querySelector("svg.tabler-icon.tabler-icon-building-store")
      ?.closest("li");
    expect(list).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
  });

  it("Renders the wheel's price", () => {
    const price = screen.getByText(wheelDetails.price);
    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent(getPrice(wheel.price_cts, { symbol: "" }));
  });
});
