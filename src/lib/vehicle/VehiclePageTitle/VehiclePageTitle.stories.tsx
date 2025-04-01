import { vehicleFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import VehiclePageTitle from ".";

const meta = {
  title: "Lib/Vehicle/VehiclePageTitle",
  component: VehiclePageTitle,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Display the page title for a vehicle",
    },
  },
} satisfies Meta<typeof VehiclePageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;

export const Default: Story = {
  args: { vehicle },
};
