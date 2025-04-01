import type { Meta, StoryObj } from "@storybook/react";

import VehicleListFilterAside from ".";

const meta = {
  title: "Lib/Vehicle/VehicleListFilterAside",
  component: VehicleListFilterAside,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A list of filters for vehicles search results",
    },
  },
} satisfies Meta<typeof VehicleListFilterAside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { searchParams: {} },
};
