import { LOCAL_URL } from "@/constants";

import { expect, test } from "@playwright/test";

test("page title", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await expect(page).toHaveTitle(/quarryside auto/i);
});

test("home page link", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await page.getByRole("link", { name: /home/i }).click();

  await expect(page).toHaveURL(LOCAL_URL);
});

test("used vehicles link", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await page
    .getByRole("link", { name: /used vehicles/i })
    .first()
    .click();
  await page.waitForURL(/vehicles/i);

  await expect(page).toHaveTitle(/beamng vehicles for sale/i);
  await expect(page).toHaveURL(/vehicles/i);
});

test("rims & tires link", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await page
    .getByRole("link", { name: /rims & tires/i })
    .first()
    .click();
  await page.waitForURL(/wheels/i);

  await expect(page).toHaveTitle(/beamng wheels for sale/i);
  await expect(page).toHaveURL(/wheels/i);
});

test("browse used cars link", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await page.getByRole("link", { name: /browse used cars/i }).click();
  await page.waitForURL(/vehicles/i);

  await expect(page).toHaveTitle(/beamng vehicles for sale/i);
  await expect(page).toHaveURL(/vehicles/i);
});

test("browse rims and tires link", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await page.getByRole("link", { name: /browse rims and tires/i }).click();
  await page.waitForURL(/wheels/i);

  await expect(page).toHaveTitle(/beamng wheels for sale/i);
  await expect(page).toHaveURL(/wheels/i);
});

test("popular models", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await page.getByRole("link", { name: /d-series/i }).click();
  await page.waitForURL(/vehicles/i);

  await expect(page).toHaveTitle(/d-series/i);
  await expect(page).toHaveURL(/vehicles/i);
});
