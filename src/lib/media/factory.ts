import { Media } from "@prisma/client";

import { faker } from "@faker-js/faker";

export function mediaFactory(): Media {
  return {
    id: faker.number.int({ max: 1000 }),
    vehicle: faker.helpers.arrayElement([null, faker.number.int()]),
    wheel: faker.helpers.arrayElement([null, faker.number.int()]),
    url: faker.image.url(),
    is_thumbnail: faker.datatype.boolean(),
    date_created: faker.date.recent(),
  };
}

export function mediaListFactory(count: number = 5): Media[] {
  return faker.helpers.multiple(() => mediaFactory(), { count });
}
