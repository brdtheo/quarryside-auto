/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
// @ts-nocheck
/**
 * USE THIS FILE TO IMPORT JSON DATA TO SQL TABLES
 */
import media from "./db/media.json";
import vehicles from "./db/vehicle.json";
import vehicleWheels from "./db/vehicles_wheels.json";
import wheels from "./db/wheel.json";
import { prisma } from "./prisma";

function fixDate(value: string | null | undefined) {
  if (!value) return null;

  return new Date(value.replace(" ", "T").replace(/([+-]\d{2})$/, "$1:00"));
}

function fixDrivetrain(value: string | null | undefined) {
  if (!value) return null;

  const map: Record<string, string> = {
    RWD: "RWD",
    FWD: "FWD",
    AWD: "AWD",
    "4WD": "FOURWD",
    "8x8": "EIGHT_BY_EIGHT",
    "8x4": "EIGHT_BY_FOUR",
    "8x6": "EIGHT_BY_SIX",
    "5x2": "FIVE_BY_TWO",
    "4x4": "FOUR_BY_FOUR",
    "6x4": "SIX_BY_FOUR",
    "6x6": "SIX_BY_SIX",
    "6x2": "SIX_BY_TWO",
    "3x3": "THREE_BY_THREE",
  };

  const result = map[value];

  if (!result) {
    throw new Error(`Unknown drivetrain: "${value}"`);
  }

  return result;
}

async function main() {
  await prisma.$transaction([
    prisma.vehicle.createMany({ data: vehicles }),
    prisma.wheel.createMany({ data: wheels }),
    prisma.vehicles_Wheels.createMany({
      data: vehicleWheels,
    }),
    prisma.media.createMany({
      data: media,
    }),
  ]);
  await prisma.vehicle.createMany({
    data: (vehicles as any[]).map((item) => ({
      ...item,
      price_cts: item.price_cts ? item.price_cts : null,
      date_created: fixDate(item.date_created),
      drivetrain: fixDrivetrain(item.drivetrain),
    })),
  });
  await prisma.wheel.createMany({
    data: wheels.map((item) => ({
      ...item,
      price_cts: item.price_cts ? item.price_cts : null,
      date_created: fixDate(item.date_created),
    })),
  });
  const uniqueVehicleWheels = Array.from(
    new Map(
      (vehicleWheels as any[]).map((item) => [
        `${item.vehicle_id}-${item.wheel_id}`,
        item,
      ]),
    ).values(),
  );
  await prisma.vehicles_Wheels.createMany({
    data: uniqueVehicleWheels,
  });
  await prisma.media.createMany({
    data: media.map((item) => ({
      ...item,
      date_created: fixDate(item.date_created),
    })),
  });

  console.log("Imported everything.");
}

main().finally(() => prisma.$disconnect());
