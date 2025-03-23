import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { wheelFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import { NextIntlClientWrapper } from "@/setupTests";

import WheelForm from ".";

describe("WheelForm", () => {
  const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;

  beforeEach(() => {
    render(<WheelForm wheel={wheel} />, { wrapper: NextIntlClientWrapper });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a form element", () => {
    const form = screen.getByLabelText("Wheel Form");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("novalidate");
    expect(form).toHaveAttribute("action");
  });

  it("Renders a list with dynamic list items from delivery/on site pickup options ", () => {
    const list = screen.queryByRole("list");
    const deliveryListItem = document
      .querySelector("svg.tabler-icon.tabler-icon-truck-delivery")
      ?.closest("li");
    const onSitePickupListItem = document
      .querySelector("svg.tabler-icon.tabler-icon-building-store")
      ?.closest("li");
    if (!wheel.free_on_site_pickup && !wheel.delivery_available) {
      return expect(list).not.toBeInTheDocument();
    }
    expect(list).toBeInTheDocument();
    if (wheel.free_on_site_pickup) {
      expect(onSitePickupListItem).toBeInTheDocument();
    }
    if (wheel.delivery_available) {
      expect(deliveryListItem).toBeInTheDocument();
    }
  });

  it("Renders a checkbox element", () => {
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("Renders a button containing text Add To Cart", () => {
    const buttonText = screen.getByText(/add to cart/i);
    const button = buttonText.closest("button");
    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
