import { wheelFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import type { Meta, StoryObj } from "@storybook/react";

import WheelCard from ".";

const meta = {
  title: "Lib/Wheel/WheelCard",
  component: WheelCard,
  parameters: {
    docs: {
      subtitle: "A card displaying a wheel's data",
    },
  },
} satisfies Meta<typeof WheelCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;

export const Default: Story = {
  args: { wheel },
};
