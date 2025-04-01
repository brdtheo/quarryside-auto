import type { Meta, StoryObj } from "@storybook/react";

import MediaSkeleton from ".";

const meta = {
  title: "Lib/Media/MediaSkeleton",
  component: MediaSkeleton,
  parameters: {
    docs: {
      subtitle: "A media placeholder",
    },
  },
} satisfies Meta<typeof MediaSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { iconWidth: 24 },
};
