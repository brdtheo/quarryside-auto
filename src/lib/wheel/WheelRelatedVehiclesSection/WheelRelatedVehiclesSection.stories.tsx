import { vehicleListFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import WheelRelatedVehiclesSection from ".";

const meta = {
  title: "Lib/Wheel/WheelRelatedVehiclesSection",
  component: WheelRelatedVehiclesSection,
  parameters: {
    docs: {
      subtitle: "Display a wheel's related vehicles",
    },
  },
} satisfies Meta<typeof WheelRelatedVehiclesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicles = (
  vehicleListFactory(3, {
    withMedia: true,
  }) as VehicleWithMedias[]
).map((vehicle) => ({ vehicles: vehicle }));

export const Default: Story = {
  args: { vehicles },
};
