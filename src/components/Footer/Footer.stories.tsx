import type { Meta, StoryObj } from "@storybook/react";

import Footer from ".";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    docs: {
      subtitle: "Additional information and navigation group",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
