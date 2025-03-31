import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Primary interaction UI component",
    },
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "lg"] },
    color: { control: "select", options: ["primary", "secondary"] },
    rounded: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = faker.lorem.word(10);
const startIcon = IconArrowLeft;
const endIcon = IconArrowRight;

export const Primary: Story = {
  args: {
    color: "primary",
    children: text,
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: text,
  },
};

export const Transparent: Story = {
  args: {
    children: text,
  },
};

export const XSmall: Story = {
  args: {
    color: "primary",
    children: text,
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    color: "primary",
    children: text,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    color: "primary",
    children: text,
    size: "lg",
  },
};

export const Rounded: Story = {
  args: {
    color: "primary",
    children: text,
    rounded: true,
  },
};

export const StartIcon: Story = {
  args: {
    color: "primary",
    children: text,
    startIcon: startIcon,
  },
};

export const EndIcon: Story = {
  args: {
    color: "primary",
    children: text,
    endIcon: endIcon,
  },
};

export const Disabled: Story = {
  args: {
    children: text,
    disabled: true,
  },
};
