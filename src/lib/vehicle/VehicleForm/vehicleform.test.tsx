import { getTranslations } from "next-intl/server";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import VehicleForm from ".";

describe("VehicleForm", async () => {
  const t = await getTranslations("vehicles");

  beforeEach(async () => {
    render(await VehicleForm());
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a form element", () => {
    const form = screen.getByLabelText("Vehicle Form");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("novalidate");
    expect(form).toHaveAttribute("action");
  });

  it("Renders a heading containing the title", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(t("form.title"));
  });

  it("Renders 4 text inputs and 1 textarea", () => {
    const textFields = screen.getAllByRole("textbox");
    const inputs = textFields.filter(
      (element) => element.tagName.toLowerCase() === "input",
    );
    const textArea = textFields.filter(
      (element) => element.tagName.toLowerCase() === "textarea",
    );
    expect(textFields).toHaveLength(5);
    expect(inputs).toHaveLength(4);
    expect(textArea).toHaveLength(1);
  });

  it("Renders a button containing text Check Availability", async () => {
    const t = await getTranslations("vehicles");
    const buttonText = screen.getByText(t("checkAvailability"));
    const button = buttonText.closest("button");
    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  it("Renders a button containing text Schedule Test Drive", async () => {
    const t = await getTranslations("vehicles");
    const buttonText = screen.getByText(t("scheduleTestDrive"));
    const button = buttonText.closest("button");
    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
