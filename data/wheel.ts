import "server-only";

import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { WheelWithMedias } from "@/lib/wheel/types";
import { getWheelFindManyArgs } from "@/lib/wheel/utils";

import { PageSearchParams } from "@/types";

/**
 * Retrieve a wheel from a slug
 * @param {string} slug The slug from the URL
 * @returns {Wheel}
 */
export async function getWheel(slug: string) {
  if (!slug) {
    throw Error("Could not retrieve wheel: no slug provided");
  }

  const wheel = await prisma.wheel.findUnique({
    where: { slug },
    include: {
      vehicles_wheels: {
        select: {
          vehicles: {
            include: {
              medias: { where: { is_thumbnail: true } },
            },
          },
        },
      },
      medias: true,
    },
  });

  return wheel;
}

/**
 * Retrieves an array of wheels
 * @param {PageSearchParams} params The page search params
 * @returns {WheelWithMedias[]}
 */
export async function getWheelList(params: PageSearchParams) {
  const args = getWheelFindManyArgs(params) as Prisma.WheelFindManyArgs;
  const wheels = await prisma.wheel.findMany(args);
  return wheels as WheelWithMedias[];
}

/**
 * Returns the number of wheels from page search params
 * @param {PageSearchParams} params The page search params
 * @returns {number}
 */
export async function getWheelListCount(params: PageSearchParams) {
  const args = getWheelFindManyArgs(params, true) as Prisma.WheelCountArgs;
  const count = await prisma.wheel.count(args);
  return count;
}
