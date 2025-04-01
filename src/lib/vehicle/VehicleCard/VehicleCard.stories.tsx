import { vehicleFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import VehicleCard from ".";

const meta = {
  title: "Lib/Vehicle/VehicleCard",
  component: VehicleCard,
  parameters: {
    docs: {
      subtitle: "A card displaying a vehicle's data",
    },
  },
} satisfies Meta<typeof VehicleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;

export const Default: Story = {
  args: { vehicle },
};
