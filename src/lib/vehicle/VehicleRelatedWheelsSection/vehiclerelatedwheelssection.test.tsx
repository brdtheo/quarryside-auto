import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { wheelListFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import { NextIntlClientWrapper } from "@/setupTests";

import VehicleRelatedWheelsSection from ".";

describe("VehicleRelatedWheelsSection", () => {
  const wheels = (
    wheelListFactory(3, {
      withMedia: true,
    }) as WheelWithMedias[]
  ).map((wheel) => ({ wheels: wheel }));

  afterEach(() => {
    cleanup();
  });

  it("Does not renders anything if no wheels are passed", () => {
    const { container } = render(<VehicleRelatedWheelsSection wheels={[]} />, {
      wrapper: NextIntlClientWrapper,
    });
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders a section with a heading of level 2", () => {
    render(<VehicleRelatedWheelsSection wheels={wheels} />, {
      wrapper: NextIntlClientWrapper,
    });
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /wheels/i,
    });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("Renders a list element", () => {
    render(<VehicleRelatedWheelsSection wheels={wheels} />, {
      wrapper: NextIntlClientWrapper,
    });
    const list = document.querySelector("section")?.lastElementChild;
    expect(list).toBeInTheDocument();
  });

  it("Renders a list item and an article for each vehicle", () => {
    render(<VehicleRelatedWheelsSection wheels={wheels} />, {
      wrapper: NextIntlClientWrapper,
    });
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(3);
    for (const article of articles) {
      expect(article).toBeInTheDocument();
      expect(article.parentElement?.tagName.toLowerCase()).toBe("li");
    }
  });
});
