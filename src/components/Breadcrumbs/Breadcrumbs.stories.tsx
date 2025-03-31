import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from ".";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Provides page location navigation information",
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
