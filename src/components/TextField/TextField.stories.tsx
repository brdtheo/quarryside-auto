import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import TextField from ".";

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A text field usable in forms",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const value = faker.lorem.words(2);
const placeholder = faker.lorem.word();

export const Default: Story = {
  args: {
    value,
    placeholder,
  },
};
