import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import SubHeaderLink from ".";

const meta = {
  title: "Components/SubHeaderLink",
  component: SubHeaderLink,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A link displayed in a subheader",
    },
  },
} satisfies Meta<typeof SubHeaderLink>;

export default meta;
type Story = StoryObj<typeof meta>;

const slug = faker.internet.domainWord();
const label = faker.lorem.word();

export const Default: Story = {
  args: { label, slug },
};

export const Disabled: Story = {
  args: { label, slug, isDisabled: true },
};
