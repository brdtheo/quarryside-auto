import type { Meta, StoryObj } from "@storybook/react";

import ThemeSwitcher from ".";

const meta = {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A color theme selector",
    },
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="bg-primary p-4">
        <ThemeSwitcher />
      </div>
    );
  },
};
