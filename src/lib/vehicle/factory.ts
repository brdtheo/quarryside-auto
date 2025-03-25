import {
  Prisma,
  Vehicle,
  VehicleBodyStyle,
  VehicleBrand,
  VehicleCondition,
  VehicleCountry,
  VehicleDrivetrain,
  VehicleEngineLayout,
  VehicleFuelType,
  VehicleTransmission,
} from "@prisma/client";

import { faker } from "@faker-js/faker";

import { mediaListFactory } from "@/lib/media/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

type VehicleFactoryOptions = {
  withMedia?: boolean;
};

export function vehicleFactory(
  options?: VehicleFactoryOptions,
): Vehicle | VehicleWithMedias {
  const engineCylinderCount = faker.helpers.arrayElement([
    null,
    faker.helpers.arrayElement([3, 4, 5, 6, 8, 10]),
  ]);

  const engineDisplacementVolumeLiters = new Prisma.Decimal(
    faker.number.float({
      fractionDigits: 1,
      min: 1,
      max: 8,
    }),
  );

  const engineLayout: Vehicle["engine_layout"] = faker.helpers.arrayElement(
    Object.values(VehicleEngineLayout),
  );

  const zeroToSixtySeconds = new Prisma.Decimal(
    faker.number.float({ fractionDigits: 1, min: 3, max: 10 }),
  );

  return {
    id: faker.number.int({ max: 1000 }),
    slug: faker.internet.domainWord(),
    thumbnail_url: faker.image.url(),
    model: faker.lorem.words(3),
    mileage: faker.number.int({ min: 50_000, max: 150_000 }),
    price_cts: BigInt(faker.number.int({ min: 10_000, max: 100_000 })),
    date_created: faker.date.recent(),
    year: faker.date.past().getFullYear(),
    description: faker.lorem.sentence(10),
    brand: faker.helpers.arrayElement(Object.values(VehicleBrand)),
    country: faker.helpers.arrayElement(Object.values(VehicleCountry)),
    body_style: faker.helpers.arrayElement(Object.values(VehicleBodyStyle)),
    weight_lbs: faker.number.int({ min: 1500, max: 3000 }),
    power_bhp: faker.number.int({ min: 100, max: 300 }),
    zero_to_sixty_seconds: zeroToSixtySeconds,
    top_speed_mph: faker.number.int({ min: 60, max: 180 }),
    drivetrain: faker.helpers.arrayElement(Object.values(VehicleDrivetrain)),
    transmission: faker.helpers.arrayElement(
      Object.values(VehicleTransmission),
    ),
    condition: faker.helpers.arrayElement(Object.values(VehicleCondition)),
    ...(engineCylinderCount
      ? {
          engine_cylinder_count: engineCylinderCount,
          engine_displacement_volume_liters: engineDisplacementVolumeLiters,
          engine_layout: engineLayout,
          fuel_type: faker.helpers.arrayElement([
            VehicleFuelType.GASOLINE,
            VehicleFuelType.DIESEL,
          ]),
        }
      : {
          engine_cylinder_count: null,
          engine_displacement_volume_liters: null,
          engine_layout: null,
          fuel_type: VehicleFuelType.BATTERY,
        }),
    ...(options?.withMedia
      ? {
          medias: mediaListFactory(),
        }
      : {}),
  };
}

export function vehicleListFactory(
  count: number = 5,
  options?: VehicleFactoryOptions,
): Vehicle[] | VehicleWithMedias[] {
  return faker.helpers.multiple(() => vehicleFactory(options), { count });
}
