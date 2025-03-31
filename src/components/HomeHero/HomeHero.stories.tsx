import type { Meta, StoryObj } from "@storybook/react";

import HomeHero from ".";

const meta = {
  title: "Components/HomeHero",
  component: HomeHero,
  parameters: {
    docs: {
      subtitle: "Presentational section in home page",
    },
  },
} satisfies Meta<typeof HomeHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
