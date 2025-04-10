import { faker } from "@faker-js/faker";

import { cleanup, render, screen, within } from "@testing-library/react";

import dayjs from "dayjs";

import { afterEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import BlogPost from ".";

const thumbnailUrl = faker.image.url();
const thumbnailAlt = faker.word.words(5);
const tags = faker.helpers.multiple(() => faker.lorem.word(), { count: 3 });
const title = faker.lorem.sentence();
const content = faker.lorem.sentences(3);
const author = faker.person.fullName();
const date = dayjs("2025-03-14").format("DD/MM/YYYY");

describe("BlogPost", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders an article element with a link within", () => {
    render(
      <BlogPost
        author={author}
        content={content}
        date={date}
        tags={tags}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const article = screen.getByRole("article");
    const link = within(article).getByRole("link");
    expect(article).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
  });

  it("Renders an image is thumbnail url is provided", () => {
    render(
      <BlogPost
        author={author}
        content={content}
        date={date}
        tags={tags}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
  });

  it("Does not render an image is thumbnail url is not provided", () => {
    render(
      <BlogPost
        author={author}
        content={content}
        date={date}
        tags={tags}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl=""
        title={title}
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const image = screen.queryByRole("img");
    const mediaSkeleton = screen.getByTestId("media-skeleton");
    expect(image).not.toBeInTheDocument();
    expect(mediaSkeleton).toBeInTheDocument();
  });

  it("Renders a list with list items if tags are provided", () => {
    render(
      <BlogPost
        author={author}
        content={content}
        date={date}
        tags={tags}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
    for (const listItem of listItems) {
      expect(listItem).toBeInTheDocument();
    }
  });

  it("Does not render a list with list items if tags are not provided", () => {
    render(
      <BlogPost
        author={author}
        content={content}
        date={date}
        tags={[]}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const list = screen.queryByRole("list");
    const listItem = screen.queryByRole("listitem");
    expect(list).not.toBeInTheDocument();
    expect(listItem).not.toBeInTheDocument();
  });

  it("Renders a heading of level 3 with the correct title", () => {
    render(
      <BlogPost
        author={author}
        content={content}
        date={date}
        tags={tags}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const heading = screen.getByRole("heading", { level: 3, name: title });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(title);
  });

  it("Renders a paragraph with the text content within", () => {
    render(
      <BlogPost
        author={author}
        content={content}
        date={date}
        tags={tags}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(content);
  });

  it("Renders a footer element with the author 's name and date within", () => {
    render(
      <BlogPost
        author={author}
        content={content}
        date={date}
        tags={tags}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const footer = screen.getByRole("contentinfo");
    const authorElement = screen.getByText(author);
    const dateElement = screen.getByText(date);
    expect(footer).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});
