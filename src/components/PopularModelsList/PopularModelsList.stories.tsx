import { vehicleListFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import PopularModelsList from ".";

const meta = {
  title: "Components/PopularModelsList",
  component: PopularModelsList,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A collection of popular vehicles",
    },
  },
} satisfies Meta<typeof PopularModelsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicles = vehicleListFactory(3, {
  withMedia: true,
}) as VehicleWithMedias[];

export const Default: Story = { args: { vehicles } };
