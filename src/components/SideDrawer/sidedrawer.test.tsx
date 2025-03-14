import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import SideDrawer from ".";

const text = faker.lorem.paragraph();

describe("SideDrawer", () => {
  afterEach(() => {
    cleanup();
  });

  it("Does not render anything if drawer is closed", () => {
    render(
      <SideDrawer isOpen={false} onClose={() => {}}>
        <p>{text}</p>
      </SideDrawer>,
    );
    const documentBodyNodes = document.body.childNodes;
    expect(documentBodyNodes).toHaveLength(1);
    expect(documentBodyNodes[0]).toBeEmptyDOMElement();
  });

  it("Renders children correctly if drawer is open", () => {
    render(
      <SideDrawer isOpen onClose={() => {}}>
        <p>{text}</p>
      </SideDrawer>,
    );
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(text);
  });
});
