import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SearchField from ".";

const meta = {
  title: "Components/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A text field for search purposes",
    },
  },
  args: { onChange: fn(), onSearch: fn(), onClear: fn() },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

const value = faker.string.alpha(10);

export const Default: Story = {
  args: {
    value,
  },
};

export const Disabled: Story = {
  args: {
    value,
    isDisabled: true,
  },
};

export const Clearable: Story = {
  args: {
    value,
    isClearable: true,
  },
};
