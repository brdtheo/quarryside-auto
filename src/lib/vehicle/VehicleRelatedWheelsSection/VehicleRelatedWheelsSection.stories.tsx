import { wheelListFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import type { Meta, StoryObj } from "@storybook/react";

import VehicleRelatedWheelsSection from ".";

const meta = {
  title: "Lib/Vehicle/VehicleRelatedWheelsSection",
  component: VehicleRelatedWheelsSection,
  parameters: {
    docs: {
      subtitle: "Display a vehicle's related wheels",
    },
  },
} satisfies Meta<typeof VehicleRelatedWheelsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const wheels = (
  wheelListFactory(3, {
    withMedia: true,
  }) as WheelWithMedias[]
).map((wheel) => ({ wheels: wheel }));

export const Default: Story = {
  args: { wheels },
};
