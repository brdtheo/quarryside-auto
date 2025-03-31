import type { Meta, StoryObj } from "@storybook/react";

import Header from ".";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    docs: {
      subtitle: "Primary navigation group",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
