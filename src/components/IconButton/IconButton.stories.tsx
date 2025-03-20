import { IconMenu2 } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import IconButton from ".";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "lg"] },
    badgeCount: { control: "number" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const number = faker.number.int(100);

export const CustomBackground: Story = {
  args: {
    children: <IconMenu2 />,
    className: "bg-gray-200",
  },
};

export const XSmall: Story = {
  args: {
    children: <IconMenu2 />,
    className: "bg-primary text-white",
    size: "sm",
  },
};

export const Small: Story = {
  args: {
    children: <IconMenu2 />,
    className: "bg-primary text-white",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: <IconMenu2 />,
    className: "bg-primary text-white",
    size: "sm",
  },
};

export const Badge: Story = {
  args: {
    children: <IconMenu2 />,
    badgeCount: number,
  },
};

export const Disabled: Story = {
  args: {
    children: <IconMenu2 />,
    disabled: true,
  },
};
