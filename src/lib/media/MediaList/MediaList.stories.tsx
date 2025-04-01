import { Media } from "@prisma/client";

import { faker } from "@faker-js/faker";

import dayjs from "dayjs";

import type { Meta, StoryObj } from "@storybook/react";

import MediaList from ".";

const meta = {
  title: "Lib/Media/MediaList",
  component: MediaList,
  parameters: {
    docs: {
      subtitle: "A list of medias",
    },
  },
} satisfies Meta<typeof MediaList>;

export default meta;
type Story = StoryObj<typeof meta>;

const numberOrNull = faker.helpers.arrayElement([faker.number.int(), null]);
const mediaList = faker.helpers.multiple<Media>(
  (_, index) => ({
    id: faker.number.int(),
    vehicle: numberOrNull,
    wheel: numberOrNull,
    url: faker.image.url({ width: 500, height: 280 }),
    is_thumbnail: index === 0,
    date_created: dayjs().toDate(),
  }),
  { count: 5 },
);
const alt = faker.lorem.words(5);

export const Default: Story = {
  args: { mediaList, alt },
};

export const SingleMedia: Story = {
  args: { mediaList: [mediaList[0]], alt },
};

export const Empty: Story = {
  args: { mediaList: [], alt },
};
