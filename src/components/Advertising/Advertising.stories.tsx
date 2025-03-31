import type { Meta, StoryObj } from "@storybook/react";

import Advertising from ".";

const meta = {
  title: "Components/Advertising",
  component: Advertising,
  parameters: {
    layout: "centered",
    docs: { subtitle: "A fake advertisement banner inspired from Google Ads" },
  },
  argTypes: {
    ratioMode: { control: "select", options: ["vertical", "horizontal"] },
  },
} satisfies Meta<typeof Advertising>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    ratioMode: "vertical",
  },
};

export const Horizontal: Story = {
  render: (args) => {
    return (
      <div className="w-80">
        <Advertising {...args} />
      </div>
    );
  },
  args: {
    ratioMode: "horizontal",
  },
};
