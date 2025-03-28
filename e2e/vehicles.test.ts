import { prisma } from "@/lib/prisma";

import {
  LOCAL_VEHICLES_EMPTY_SEARCH_RESULT_URL,
  LOCAL_VEHICLES_PAGE_URL,
  LOCAL_VEHICLES_TEXT_SEARCH_URL,
} from "@/constants";

import { expect, test } from "@playwright/test";

test("text search result", async ({ page }) => {
  await page.goto(LOCAL_VEHICLES_TEXT_SEARCH_URL);

  await page.waitForURL(/vehicles/i);

  const rowsCount = (await prisma.vehicle.count()).toString();
  const resultCount = await page.getByLabel("result-count");
  const searchField = await page.locator("input[value='bastion']").last();
  await expect(page).toHaveURL(/q=bastion/i);
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
  await expect(searchField).toBeVisible();
});

test("empty search result", async ({ page }) => {
  await page.goto(LOCAL_VEHICLES_EMPTY_SEARCH_RESULT_URL);

  await page.waitForURL(/vehicles/i);

  const resultCount = await page.getByLabel("result-count");
  const searchResultTitle = await page.getByText(/no vehicles found/i);
  const searchResultDescription = await page.getByText(
    /there are no results that match your search/i,
  );
  await expect(page).toHaveURL(LOCAL_VEHICLES_EMPTY_SEARCH_RESULT_URL);
  await expect(resultCount).toHaveText(/0 result/i);
  await expect(searchResultTitle).toBeVisible();
  await expect(searchResultDescription).toBeVisible();
});

test("remove applied filter", async ({ page }) => {
  const optionLabel = "Used";
  const rowsCount = (await prisma.vehicle.count()).toString();
  await page.goto(
    `${LOCAL_VEHICLES_PAGE_URL}?condition=${optionLabel.toUpperCase()}`,
  );
  const appliedFilterChip = await page
    .getByTestId("chip")
    .filter({ hasText: optionLabel });
  const removeFilterLink = await appliedFilterChip.getByRole("link");

  await removeFilterLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).not.toHaveURL(
    new RegExp(`condition=${optionLabel.toUpperCase()}`),
  );
  await expect(resultCount).toHaveText(new RegExp(rowsCount));
  await expect(page.getByTestId("chip")).not.toBeVisible();
});

test("condition filter", async ({ page }) => {
  const optionLabel = "Used";
  const rowsCount = (await prisma.vehicle.count()).toString();

  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  const title = await page.getByText("Condition");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });

  await optionLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).toHaveURL(
    new RegExp(`condition=${optionLabel.toUpperCase()}`),
  );
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("brand filter", async ({ page }) => {
  const optionLabel = "ETK";
  const rowsCount = (await prisma.vehicle.count()).toString();

  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  const title = await page.getByText("Brand");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });

  await optionLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).toHaveURL(
    new RegExp(`brand=${optionLabel.toUpperCase()}`),
  );
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("body style filter", async ({ page }) => {
  const optionLabel = "Sedan";
  const rowsCount = (await prisma.vehicle.count()).toString();

  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  const title = await page.getByText("Body Style");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });

  await optionLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).toHaveURL(
    new RegExp(`body_style=${optionLabel.toUpperCase()}`),
  );
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("fuel type filter", async ({ page }) => {
  const optionLabel = "Gasoline";
  const rowsCount = (await prisma.vehicle.count()).toString();

  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  const title = await page.getByText("Fuel Type");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });

  await optionLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).toHaveURL(
    new RegExp(`fuel_type=${optionLabel.toUpperCase()}`),
  );
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("cylinders filter", async ({ page }) => {
  const optionLabel = "5 cylinders";
  const rowsCount = (await prisma.vehicle.count()).toString();

  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  const title = await page.getByText("Cylinders");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });

  await optionLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).toHaveURL(new RegExp("engine_cylinder_count=5"));
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("transmission filter", async ({ page }) => {
  const optionLabel = "Manual";
  const rowsCount = (await prisma.vehicle.count()).toString();

  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  const title = await page.getByText("Transmission");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });

  await optionLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).toHaveURL(
    new RegExp(`transmission=${optionLabel.toUpperCase()}`),
  );
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("drivetrain filter", async ({ page }) => {
  const optionLabel = "RWD";
  const rowsCount = (await prisma.vehicle.count()).toString();

  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  const title = await page.getByText("Drivetrain");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });

  await optionLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).toHaveURL(
    new RegExp(`drivetrain=${optionLabel.toUpperCase()}`),
  );
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});

test("country filter", async ({ page }) => {
  const optionLabel = "USA";
  const rowsCount = (await prisma.vehicle.count()).toString();

  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  const title = await page.getByText("Country");
  const optionLink = await page.getByRole("link", {
    name: optionLabel,
    exact: true,
  });

  await optionLink.click();
  await page.waitForURL(/vehicles/i);
  const resultCount = await page.getByLabel("result-count");

  await expect(page).toHaveURL(
    new RegExp(`country=${optionLabel.toUpperCase()}`),
  );
  const selectedOptionCount = title.getByTestId("chip");
  await expect(selectedOptionCount).toHaveText("1");
  await expect(resultCount).not.toHaveText(new RegExp(rowsCount));
});
