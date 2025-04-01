import { vehicleFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import VehicleMediaList from ".";

const meta = {
  title: "Lib/Vehicle/VehicleMediaList",
  component: VehicleMediaList,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Display vehicle medias",
    },
  },
} satisfies Meta<typeof VehicleMediaList>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;

export const Default: Story = {
  args: { vehicle },
};
