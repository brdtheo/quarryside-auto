import { Media } from "@prisma/client";

import { faker } from "@faker-js/faker";

/**
 * Generate a fake media
 * @param options Options to alter the properties of the media
 * @returns {Media}
 */
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

/**
 * Generate a list of fake medias
 * @param count The number of objects to generate
 * @returns {Media[]}
 */
export function mediaListFactory(count: number = 5): Media[] {
  return [
    mediaFactory({ isThumbnail: true }),
    ...faker.helpers.multiple(() => mediaFactory(), { count }),
  ];
}
