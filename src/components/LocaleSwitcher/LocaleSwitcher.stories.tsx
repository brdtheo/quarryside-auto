import type { Meta, StoryObj } from "@storybook/react";

import LocaleSwitcher from ".";

const meta = {
  title: "Components/LocaleSwitcher",
  component: LocaleSwitcher,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A language selector",
    },
  },
} satisfies Meta<typeof LocaleSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="bg-primary p-4">
        <LocaleSwitcher />
      </div>
    );
  },
};
