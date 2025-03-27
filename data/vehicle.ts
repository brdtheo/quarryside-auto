import "server-only";

import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { VehicleWithMedias } from "@/lib/vehicle/types";
import { getVehicleFindManyArgs } from "@/lib/vehicle/utils";

import { PageSearchParams } from "@/types";

/**
 * Retrieve a vehicle from a slug
 * @param {string} slug The slug from the URL
 * @returns {Vehicle}
 */
export async function getVehicle(slug: string) {
  if (!slug) {
    throw new Error("Could not retrieve vehicle: no slug provided");
  }

  const vehicle = await prisma.vehicle.findUnique({
    where: { slug },
    include: {
      vehicles_wheels: {
        select: {
          wheels: {
            include: {
              medias: { where: { is_thumbnail: true } },
            },
          },
        },
      },
      medias: true,
    },
  });

  return vehicle;
}

/**
 * Retrieves an array of vehicles
 * @param {PageSearchParams} params The page search params
 * @returns {VehicleWithMedias[]}
 */
export async function getVehicleList(params: PageSearchParams) {
  const args = getVehicleFindManyArgs(params) as Prisma.VehicleFindManyArgs;
  const vehicles = await prisma.vehicle.findMany(args);
  return vehicles as VehicleWithMedias[];
}

/**
 * Returns the number of vehicles from page search params
 * @param {PageSearchParams} params The page search params
 * @returns {number}
 */
export async function getVehicleListCount(params: PageSearchParams) {
  const args = getVehicleFindManyArgs(params, true) as Prisma.VehicleCountArgs;
  const count = await prisma.vehicle.count(args);
  return count;
}
