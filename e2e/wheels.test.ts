import { prisma } from "@/lib/prisma";

import {
  LOCAL_WHEELS_EMPTY_SEARCH_RESULT_URL,
  LOCAL_WHEELS_PAGE_URL,
  LOCAL_WHEELS_TEXT_SEARCH_RESULT_URL,
} from "@/constants";

import { expect, test } from "@playwright/test";

test("text search result", async ({ page }) => {
  await page.goto(LOCAL_WHEELS_TEXT_SEARCH_RESULT_URL);

  await page.waitForURL(/wheels/i);

  const rowsCount = (await prisma.wheel.count()).toString();
  const resultCount = await page.getByLabel("result-count");
  const searchField = await page.locator("input[value='type']").last();
  await expect(page).toHaveURL(/q=type/i);
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
  await expect(searchField).toBeVisible();
});

test("empty search result", async ({ page }) => {
  await page.goto(LOCAL_WHEELS_EMPTY_SEARCH_RESULT_URL);

  await page.waitForURL(/wheels/i);

  const resultCount = await page.getByLabel("result-count");
  const searchResultTitle = await page.getByText(/no wheels found/i);
  const searchResultDescription = await page.getByText(
    /there are no results that match your search/i,
  );
  await expect(page).toHaveURL(LOCAL_WHEELS_EMPTY_SEARCH_RESULT_URL);
  await expect(resultCount).toHaveText(/0 result/i);
  await expect(searchResultTitle).toBeVisible();
  await expect(searchResultDescription).toBeVisible();
});

test("remove applied filter", async ({ page }) => {
  const optionLabel = "TIMS";
  const rowsCount = (await prisma.wheel.count()).toString();
  await page.goto(`${LOCAL_WHEELS_PAGE_URL}?brand=${optionLabel}`);

  const appliedFilterChip = await page
    .getByTestId("chip")
    .filter({ hasText: optionLabel });
  const removeFilterLink = await appliedFilterChip.getByRole("link");
  await removeFilterLink.click();
  await page.waitForURL(/wheels/i);

  const resultCount = await page.getByLabel("result-count");
  await expect(page).not.toHaveURL(new RegExp(`brand=${optionLabel}`));
  await expect(resultCount).toHaveText(new RegExp(rowsCount));
  await expect(page.getByTestId("chip")).not.toBeVisible();
});

test("brand filter", async ({ page }) => {
  const optionLabel = "Folk";
  const rowsCount = (await prisma.wheel.count()).toString();
  await page.goto(LOCAL_WHEELS_PAGE_URL);

  const title = await page.getByText("Brand");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });
  await optionLink.click();
  await page.waitForURL(/wheels/i);

  const resultCount = await page.getByLabel("result-count");
  await expect(page).toHaveURL(
    new RegExp(`brand=${optionLabel.toUpperCase()}`),
  );
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("availability filter", async ({ page }) => {
  const rowsCount = (await prisma.wheel.count()).toString();
  await page.goto(LOCAL_WHEELS_PAGE_URL);

  const optionLink = await page.getByRole("link", {
    name: "5 lugs",
    exact: true,
  });
  await optionLink.click();
  await page.waitForURL(/wheels/i);

  const resultCount = await page.getByLabel("result-count");
  await expect(page).toHaveURL(new RegExp("is_five_lug=true"));
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("delivery filter", async ({ page }) => {
  const rowsCount = (await prisma.wheel.count()).toString();
  await page.goto(LOCAL_WHEELS_PAGE_URL);

  const title = await page.getByText("Delivery");
  const optionLink = await page.getByRole("link", {
    name: "Available for delivery",
    exact: true,
  });
  await optionLink.click();
  await page.waitForURL(/wheels/i);

  const resultCount = await page.getByLabel("result-count");
  await expect(page).toHaveURL(new RegExp("delivery_available=true"));
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("on site pickup filter", async ({ page }) => {
  await page.goto(LOCAL_WHEELS_PAGE_URL);

  const title = await page.getByText("On site pickup");
  const optionLink = await page.getByRole("link", {
    name: "Free on site pickup",
    exact: true,
  });
  await optionLink.click();
  await page.waitForURL(/wheels/i);

  await expect(page).toHaveURL(new RegExp("free_on_site_pickup=true"));
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
});
