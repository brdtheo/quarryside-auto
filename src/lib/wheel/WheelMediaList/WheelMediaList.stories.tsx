import { wheelFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import type { Meta, StoryObj } from "@storybook/react";

import WheelMediaList from ".";

const meta = {
  title: "Lib/Wheel/WheelMediaList",
  component: WheelMediaList,
  parameters: {
    docs: {
      subtitle: "Display wheel medias",
    },
  },
} satisfies Meta<typeof WheelMediaList>;

export default meta;
type Story = StoryObj<typeof meta>;

const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;

export const Default: Story = {
  args: { wheel },
};
