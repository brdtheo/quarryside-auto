import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import VehicleListFilterHeader from ".";

const meta = {
  title: "Lib/Vehicle/VehicleListFilterHeader",
  component: VehicleListFilterHeader,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Header containing related infos from vehicle search results",
    },
  },
} satisfies Meta<typeof VehicleListFilterHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const resultCount = faker.number.int({ min: 1, max: 1000 });

export const Default: Story = {
  args: { resultCount, searchParams: {} },
};
