import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { wheelFactory } from "@/lib/wheel/factory";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";
import { WheelWithMedias } from "@/lib/wheel/types";

import { NextIntlClientWrapper } from "@/setupTests";

import WheelPageTitle from ".";

describe("WheelPageTitle", () => {
  const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;
  const {
    result: { current },
  } = renderHook(() => useWheelDetails(wheel), {
    wrapper: NextIntlClientWrapper,
  });
  const wheelDetails = current;

  beforeEach(() => {
    render(<WheelPageTitle wheel={wheel} />, {
      wrapper: NextIntlClientWrapper,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a heading of level 1 with the correct text content", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(wheelDetails.title);
  });
});
