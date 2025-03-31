import type { Meta, StoryObj } from "@storybook/react";

import SubHeader from ".";

const meta = {
  title: "Components/SubHeader",
  component: SubHeader,
  parameters: {
    docs: {
      subtitle: "A secondary navigation group",
    },
  },
} satisfies Meta<typeof SubHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
