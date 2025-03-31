import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import ListFilterHeader from ".";

const meta = {
  title: "Components/ListFilterHeader",
  component: ListFilterHeader,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Header containing related infos from search results",
    },
  },
} satisfies Meta<typeof ListFilterHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const resultCount = faker.number.int({ min: 1, max: 1000 });
const activeFilterCount = faker.number.int(50);
const query = faker.lorem.word(8);

export const Default: Story = {
  args: {
    resultCount,
    activeFilterCount,
    pageSearchParams: { q: query },
    handleOpenFilterDrawer: fn(),
  },
};
