import { Media } from "@prisma/client";

import { faker } from "@faker-js/faker";

import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import dayjs from "dayjs";

import { afterEach, describe, expect, it } from "vitest";

import MediaList from ".";

const numberOrNull = faker.helpers.arrayElement([faker.number.int(), null]);
const mediaList = faker.helpers.multiple<Media>(
  (_, index) => ({
    id: faker.number.int(),
    vehicle: numberOrNull,
    wheel: numberOrNull,
    url: faker.image.url(),
    is_thumbnail: index === 0,
    date_created: dayjs().toDate(),
  }),
  { count: 5 },
);
const alt = faker.lorem.words(5);

describe("MediaList", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a skeleton if media list is empty", () => {
    render(<MediaList mediaList={[]} alt="" />);
    const skeleton = screen.getByTestId("media-skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  it("Renders a button with an image within for the thumbnail", () => {
    render(<MediaList mediaList={mediaList} alt={alt} />);
    const button = screen.getByRole("button", {
      name: "Expand media thumbnail image",
    });
    const image = within(button).getByRole("img");
    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
  });

  it("Does not render a list if media list has only one item", () => {
    render(<MediaList mediaList={[mediaList[0]]} alt={alt} />);
    const list = screen.queryByRole("list");
    const listItem = screen.queryByRole("listitem");
    expect(list).not.toBeInTheDocument();
    expect(listItem).not.toBeInTheDocument();
  });

  it("Renders a list with a list item containg the preview for each media item", () => {
    render(<MediaList mediaList={mediaList} alt={alt} />);
    const list = screen.getByRole("list");
    const listItem = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(listItem).toHaveLength(5);
    listItem.forEach((listItem) => {
      const button = within(listItem).getByRole("button");
      const image = within(button).getByRole("img");
      expect(button).toBeInTheDocument();
      expect(listItem).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src");
      expect(image).toHaveAttribute("alt");
    });
  });

  it("Renders the expanded view when clicking on a media", async () => {
    render(<MediaList mediaList={mediaList} alt={alt} />);
    const button = screen.getByRole("button", {
      name: "Expand media thumbnail image",
    });
    await userEvent.click(button);
    const body = document.body;
    const yarlRoot = screen.getByRole("presentation");
    const yarlPreviousButton = within(yarlRoot).getByRole("button", {
      name: "Previous",
    });
    const yarlNextButton = within(yarlRoot).getByRole("button", {
      name: "Next",
    });
    const yarlCloseButton = within(yarlRoot).getByRole("button", {
      name: "Close",
    });
    expect(body).toHaveClass("yarl__no_scroll");
    expect(yarlRoot).toBeInTheDocument();
    expect(yarlRoot).toHaveClass(
      "yarl__root yarl__portal yarl__no_scroll_padding yarl__portal_open",
    );
    expect(yarlPreviousButton).toBeInTheDocument();
    expect(yarlNextButton).toBeInTheDocument();
    expect(yarlCloseButton).toBeInTheDocument();
  });
});
