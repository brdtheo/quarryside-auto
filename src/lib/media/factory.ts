import { Media } from "@prisma/client";

import { faker } from "@faker-js/faker";

export function mediaFactory(options?: { isThumbnail: boolean }): Media {
  return {
    id: faker.number.int({ max: 1000 }),
    vehicle: faker.helpers.arrayElement([null, faker.number.int()]),
    wheel: faker.helpers.arrayElement([null, faker.number.int()]),
    url: faker.image.url({ width: 1000, height: 562 }),
    is_thumbnail: options?.isThumbnail ?? false,
    date_created: faker.date.recent(),
  };
}

export function mediaListFactory(count: number = 5): Media[] {
  return [
    mediaFactory({ isThumbnail: true }),
    ...faker.helpers.multiple(() => mediaFactory(), { count }),
  ];
}
