import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SideDrawer from ".";

const meta = {
  title: "Components/SideDrawer",
  component: SideDrawer,
  parameters: {
    docs: {
      subtitle: "A scrollable content wrapper for small viewports",
      story: {
        height: "500px",
      },
    },
  },
} satisfies Meta<typeof SideDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = faker.lorem.paragraph();

export const Default: Story = {
  args: {
    children: <p>{text}</p>,
    isOpen: true,
    onClose: fn(),
  },
};
