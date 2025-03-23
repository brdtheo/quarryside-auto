/**
 * HEALTH CHECK
 * Ensure all routes are available for end users
 */
import { prisma } from "@/lib/prisma";

import {
  HOME_PAGE_TITLE_REGEX,
  LOCAL_URL,
  LOCAL_VEHICLES_PAGE_URL,
  LOCAL_WHEELS_PAGE_URL,
  VEHICLES_PAGE_TITLE_REGEX,
  WHEELS_PAGE_TITLE_REGEX,
} from "@/constants";

import { expect, test } from "@playwright/test";

test("home", async ({ page }) => {
  await page.goto(LOCAL_URL);

  await expect(page).toHaveTitle(HOME_PAGE_TITLE_REGEX);
});

test("vehicles", async ({ page }) => {
  await page.goto(LOCAL_VEHICLES_PAGE_URL);

  await expect(page).toHaveTitle(VEHICLES_PAGE_TITLE_REGEX);
  await expect(page).toHaveURL(LOCAL_VEHICLES_PAGE_URL);
});

test("vehicle details", async ({ page }) => {
  const vehicle = await prisma.vehicle.findFirst();
  if (!vehicle) return;

  await page.goto(`${LOCAL_VEHICLES_PAGE_URL}/${vehicle.slug}`);
  await page.waitForURL(/vehicles/i);

  await expect(page).toHaveTitle(new RegExp(vehicle.model));
  await expect(page).toHaveURL(new RegExp(vehicle.slug));
});

test("wheels", async ({ page }) => {
  await page.goto(LOCAL_WHEELS_PAGE_URL);

  await expect(page).toHaveTitle(WHEELS_PAGE_TITLE_REGEX);
  await expect(page).toHaveURL(LOCAL_WHEELS_PAGE_URL);
});

test("wheel details", async ({ page }) => {
  const wheel = await prisma.wheel.findFirst();
  if (!wheel) return;

  await page.goto(`${LOCAL_WHEELS_PAGE_URL}/${wheel.slug}`);
  await page.waitForURL(/wheels/i);

  await expect(page).toHaveTitle(new RegExp(wheel.model ?? ""));
  await expect(page).toHaveURL(new RegExp(wheel.slug));
});
