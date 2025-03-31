import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Checkbox from ".";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Boolean option in a form field",
    },
  },
  argTypes: {
    checked: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const id = faker.string.alphanumeric(10);
const label = faker.lorem.word(10);
const href = faker.internet.url();

export const Default: Story = {
  args: {
    id,
    label,
    checked: false,
    href: href,
  },
};

export const Checked: Story = {
  args: {
    id,
    label,
    checked: true,
    href: href,
  },
};
