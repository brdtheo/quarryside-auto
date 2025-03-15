import { Wheel, WheelBrand } from "@prisma/client";

import { faker } from "@faker-js/faker";

import { mediaListFactory } from "@/lib/media/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

type WheelFactoryOptions = {
  withMedia?: boolean;
};

export function wheelFactory(
  options?: WheelFactoryOptions,
): Wheel | WheelWithMedias {
  return {
    id: faker.number.int({ max: 1000 }),
    slug: faker.internet.domainWord(),
    thumbnail_url: faker.image.url(),
    brand: faker.helpers.arrayElement(Object.values(WheelBrand)),
    model: faker.lorem.words(3),
    price_cts: BigInt(faker.number.int({ min: 35000, max: 120000 })),
    date_created: faker.date.recent(),
    delivery_available: faker.datatype.boolean(),
    free_on_site_pickup: faker.datatype.boolean(),
    sizes: faker.helpers.multiple(() => faker.lorem.words(4), { count: 3 }),
    tires: faker.helpers.multiple(() => faker.lorem.words(4), { count: 3 }),
    consumption: faker.helpers.arrayElement(["A", "B", "C", "D", "E", "F"]),
    is_four_lug: faker.datatype.boolean(),
    is_five_lug: faker.datatype.boolean(),
    is_six_lug: faker.datatype.boolean(),
    is_eight_lug: faker.datatype.boolean(),
    is_central_lug: faker.datatype.boolean(),
    is_three_lug: faker.datatype.boolean(),
    is_ten_lug: faker.datatype.boolean(),
    ...(options?.withMedia
      ? {
          medias: mediaListFactory(),
        }
      : {}),
  };
}

export function wheelListFactory(
  count: number = 5,
  options?: WheelFactoryOptions,
): Wheel[] | WheelWithMedias[] {
  return faker.helpers.multiple(() => wheelFactory(options), { count });
}
