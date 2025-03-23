import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { wheelFactory } from "@/lib/wheel/factory";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";
import { WheelWithMedias } from "@/lib/wheel/types";

import { NextIntlClientWrapper } from "@/setupTests";

import WheelRichData from ".";

describe("WheelRichData", () => {
  const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;
  const {
    result: { current },
  } = renderHook(() => useWheelDetails(wheel), {
    wrapper: NextIntlClientWrapper,
  });
  const wheelDetails = current;

  beforeEach(() => {
    render(<WheelRichData wheel={wheel} />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a script element", () => {
    const script = screen.getByTestId("wheel-rich-data");
    expect(script).toBeInTheDocument();
  });

  it("Inserts JSON-LD data into the script element", () => {
    const script = screen.getByTestId("wheel-rich-data");
    const scriptData = JSON.parse(script.textContent ?? "");
    const thumbnail =
      (wheel.medias ?? []).find((media) => media.is_thumbnail)?.url ?? "";
    expect(scriptData["@type"]).toBe("Product");
    expect(scriptData.name).toBe(wheelDetails.title);
    expect(scriptData.image).toBe(thumbnail);
    expect(scriptData.brand).toMatchObject({
      "@type": "Brand",
      name: wheelDetails.brand,
    });
    expect(scriptData.offers).toMatchObject({
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `https://quarryside-auto.com/wheels/${wheel.slug}`,
      priceCurrency: "USD",
      price: wheelDetails.price,
    });
  });
});
