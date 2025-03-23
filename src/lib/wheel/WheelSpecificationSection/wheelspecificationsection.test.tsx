import { useTranslations } from "next-intl";

import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { wheelFactory } from "@/lib/wheel/factory";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import { NextIntlClientWrapper } from "@/setupTests";

import WheelSpecificationSection from ".";

describe("WheelSpecificationSection", () => {
  const t = useTranslations("wheels");
  const wheel = wheelFactory();
  const {
    result: { current },
  } = renderHook(() => useWheelDetails(wheel), {
    wrapper: NextIntlClientWrapper,
  });
  const wheelDetails = current;

  afterEach(() => {
    cleanup();
  });

  it("Does not renders anything if wheel is not passed", () => {
    // @ts-expect-error We simulate an unexpected behavior
    const { container } = render(<WheelSpecificationSection />, {
      wrapper: NextIntlClientWrapper,
    });
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders a section with a heading of level 2", () => {
    render(<WheelSpecificationSection wheel={wheel} />, {
      wrapper: NextIntlClientWrapper,
    });
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /specifications/i,
    });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("Renders a table element", () => {
    render(<WheelSpecificationSection wheel={wheel} />, {
      wrapper: NextIntlClientWrapper,
    });
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("Renders the wheel brand if defined", () => {
    if (wheel.brand === "NO_BRAND") return;
    render(<WheelSpecificationSection wheel={wheel} />, {
      wrapper: NextIntlClientWrapper,
    });
    const brand = screen.getByText(wheelDetails.brand);
    expect(brand).toBeInTheDocument();
  });

  it("Renders the wheel sizes", () => {
    render(<WheelSpecificationSection wheel={wheel} />, {
      wrapper: NextIntlClientWrapper,
    });
    (wheel.sizes ?? []).forEach((sizeName) => {
      const size = screen.getByText(sizeName);
      expect(size).toBeInTheDocument();
    });
  });

  it("Renders the wheel tires", () => {
    render(<WheelSpecificationSection wheel={wheel} />, {
      wrapper: NextIntlClientWrapper,
    });
    (wheel.tires ?? []).forEach((tireName) => {
      const tire = screen.getByText(tireName);
      expect(tire).toBeInTheDocument();
    });
  });

  it("Renders the wheel availability", () => {
    render(<WheelSpecificationSection wheel={wheel} />, {
      wrapper: NextIntlClientWrapper,
    });

    if (wheel.is_three_lug) {
      const element = screen.queryByText(t("filter.is_three_lug.option.true"));
      expect(element).toBeInTheDocument();
    }
    if (wheel.is_four_lug) {
      const element = screen.queryByText(t("filter.is_four_lug.option.true"));
      expect(element).toBeInTheDocument();
    }
    if (wheel.is_five_lug) {
      const element = screen.queryByText(t("filter.is_five_lug.option.true"));
      expect(element).toBeInTheDocument();
    }
    if (wheel.is_six_lug) {
      const element = screen.queryByText(t("filter.is_six_lug.option.true"));
      expect(element).toBeInTheDocument();
    }
    if (wheel.is_eight_lug) {
      const element = screen.queryByText(t("filter.is_eight_lug.option.true"));
      expect(element).toBeInTheDocument();
    }
    if (wheel.is_ten_lug) {
      const element = screen.queryByText(t("filter.is_ten_lug.option.true"));
      expect(element).toBeInTheDocument();
    }
    if (wheel.is_central_lug) {
      const element = screen.queryByText(
        t("filter.is_central_lug.option.true"),
      );
      expect(element).toBeInTheDocument();
    }
  });

  it("Renders the wheel consumption", () => {
    render(<WheelSpecificationSection wheel={wheel} />, {
      wrapper: NextIntlClientWrapper,
    });
    const consumption = screen.getByText(`${wheel.consumption}`);
    expect(consumption).toBeInTheDocument();
  });
});
