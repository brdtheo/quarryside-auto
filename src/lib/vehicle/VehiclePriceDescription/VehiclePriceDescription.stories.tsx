import { vehicleFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import VehiclePriceDescription from ".";

const meta = {
  title: "Lib/Vehicle/VehiclePriceDescription",
  component: VehiclePriceDescription,
  parameters: {
    docs: {
      subtitle: "Display a vehicle's price and description",
    },
  },
} satisfies Meta<typeof VehiclePriceDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;

export const Default: Story = {
  args: { vehicle },
};
