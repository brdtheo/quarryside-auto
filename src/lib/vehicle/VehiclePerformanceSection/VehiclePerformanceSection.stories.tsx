import { vehicleFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import VehiclePerformanceSection from ".";

const meta = {
  title: "Lib/Vehicle/VehiclePerformanceSection",
  component: VehiclePerformanceSection,
  parameters: {
    docs: {
      subtitle: "Display a vehicle's performance related infos",
    },
  },
} satisfies Meta<typeof VehiclePerformanceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;

export const Default: Story = {
  args: { vehicle },
};
