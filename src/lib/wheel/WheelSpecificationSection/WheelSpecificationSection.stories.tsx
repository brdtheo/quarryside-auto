import { wheelFactory } from "@/lib/wheel/factory";

import type { Meta, StoryObj } from "@storybook/react";

import WheelSpecificationSection from ".";

const meta = {
  title: "Lib/Wheel/WheelSpecificationSection",
  component: WheelSpecificationSection,
  parameters: {
    docs: {
      subtitle: "Display a wheel's informations",
    },
  },
} satisfies Meta<typeof WheelSpecificationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const wheel = wheelFactory();

export const Default: Story = {
  args: { wheel },
};
