import { vehicleFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import VehicleSpecificationSection from ".";

const meta = {
  title: "Lib/Vehicle/VehicleSpecificationSection",
  component: VehicleSpecificationSection,
  parameters: {
    docs: {
      subtitle: "Display a vehicle's informations",
    },
  },
} satisfies Meta<typeof VehicleSpecificationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;

export const Default: Story = {
  args: { vehicle },
};
