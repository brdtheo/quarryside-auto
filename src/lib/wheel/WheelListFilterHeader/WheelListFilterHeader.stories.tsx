import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import WheelListFilterHeader from ".";

const meta = {
  title: "Lib/Wheel/WheelListFilterHeader",
  component: WheelListFilterHeader,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Header containing related infos from wheel search results",
    },
  },
} satisfies Meta<typeof WheelListFilterHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const resultCount = faker.number.int({ min: 1, max: 1000 });

export const Default: Story = {
  args: { resultCount, searchParams: {} },
};
