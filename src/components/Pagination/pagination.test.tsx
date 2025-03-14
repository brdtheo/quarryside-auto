import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import Pagination, { PAGINATION_PAGE_INDEX_THRESHOLD } from ".";

const pageCount = faker.number.int({ min: 10, max: 20 });

describe("Pagination", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders a previous page link if the current page is not the first page", () => {
    render(<Pagination page={2} pageCount={pageCount} searchParams={{}} />);
    const previousPageLink = screen.getByRole("link", {
      name: "Previous page",
    });
    const previousPageLinkIcon = document.querySelector(
      "svg.tabler-icon.tabler-icon-chevrons-left",
    );
    expect(previousPageLink).toBeInTheDocument();
    expect(previousPageLink).toHaveAttribute("href");
    expect(previousPageLinkIcon).toBeInTheDocument();
  });

  it("Does not render a previous page link if the current page is the first page", () => {
    render(<Pagination page={1} pageCount={pageCount} searchParams={{}} />);
    const previousPageLink = screen.queryByRole("link", {
      name: "Previous page",
    });
    expect(previousPageLink).not.toBeInTheDocument();
  });

  it("Renders a next page link if the current page is not the last page", () => {
    render(
      <Pagination
        page={pageCount - 1}
        pageCount={pageCount}
        searchParams={{}}
      />,
    );
    const nextPageLink = screen.getByRole("link", {
      name: "Next page",
    });
    const nextPageLinkIcon = document.querySelector(
      "svg.tabler-icon.tabler-icon-chevrons-right",
    );
    expect(nextPageLink).toBeInTheDocument();
    expect(nextPageLink).toHaveAttribute("href");
    expect(nextPageLinkIcon).toBeInTheDocument();
  });

  it("Does not render a next page link if the current page is the last page", () => {
    render(
      <Pagination page={pageCount} pageCount={pageCount} searchParams={{}} />,
    );
    const nextPageLink = screen.queryByRole("link", {
      name: "Next page",
    });
    expect(nextPageLink).not.toBeInTheDocument();
  });

  it("Does not render previous or next button if the number of pages is 1", () => {
    render(<Pagination page={1} pageCount={1} searchParams={{}} />);
    const previousPageLink = screen.queryByRole("link", {
      name: "Previous page",
    });
    const nextPageLink = screen.queryByRole("link", {
      name: "Next page",
    });
    expect(previousPageLink).not.toBeInTheDocument();
    expect(nextPageLink).not.toBeInTheDocument();
  });

  it("Renders the correct maximum amount of page button elements", () => {
    render(<Pagination page={5} pageCount={10} searchParams={{}} />);
    const pageLinksCount = PAGINATION_PAGE_INDEX_THRESHOLD * 2 + 1;
    const navigationLinksCount = 2;
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(pageLinksCount + navigationLinksCount);
  });
});
