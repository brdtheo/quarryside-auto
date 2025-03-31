import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Select from ".";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "Alter a behavior based on a choice of options",
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const placeholder = faker.lorem.word();
const options = faker.helpers.multiple(
  () => ({
    label: faker.lorem.words(2),
    value: faker.string.alpha(5),
  }),
  { count: 3 },
);

export const Default: Story = {
  args: {
    placeholder,
    options,
    value: "",
  },
};
