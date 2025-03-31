import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import Container from ".";

const meta = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "An element wrapper for display purposes",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = faker.lorem.paragraphs();

export const Default: Story = {
  render: (args) => {
    return <Container>{args.children}</Container>;
  },
  args: { children: <p>{text}</p> },
};
