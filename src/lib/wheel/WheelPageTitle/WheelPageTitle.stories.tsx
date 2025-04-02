import { wheelFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import type { Meta, StoryObj } from "@storybook/react";

import WheelPageTitle from ".";

const meta = {
  title: "Lib/Wheel/WheelPageTitle",
  component: WheelPageTitle,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Display the page title for a wheel",
    },
  },
} satisfies Meta<typeof WheelPageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;

export const Default: Story = {
  args: { wheel },
};
