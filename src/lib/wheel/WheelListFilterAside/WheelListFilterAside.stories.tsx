import type { Meta, StoryObj } from "@storybook/react";

import WheelListFilterAside from ".";

const meta = {
  title: "Lib/Wheel/WheelListFilterAside",
  component: WheelListFilterAside,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A list of filters for wheels search results",
    },
  },
} satisfies Meta<typeof WheelListFilterAside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { searchParams: {} },
};
