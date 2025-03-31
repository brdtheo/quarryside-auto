import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import HeaderSideDrawer from ".";

const meta = {
  title: "Components/HeaderSideDrawer",
  component: HeaderSideDrawer,
  parameters: {
    docs: {
      subtitle: "A side drawer containing the header navigation group items",
      story: {
        height: "500px",
      },
    },
  },
} satisfies Meta<typeof HeaderSideDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
  },
};
