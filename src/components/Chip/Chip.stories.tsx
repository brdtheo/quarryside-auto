import { IconExternalLink, IconHeadphones, IconPlugConnected } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import Chip from ".";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Highlights a piece of information",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = faker.lorem.word(10);
const iconHref = faker.internet.url();

export const Default: Story = {
  args: {
    children: text,
  },
};

export const StartIcon: Story = {
  args: {
    children: text,
    startIcon: IconPlugConnected,
  },
};

export const EndIcon: Story = {
  args: {
    children: text,
    endIcon: IconHeadphones,
  },
};

export const IconURL: Story = {
  parameters: { subtitle: "test" },
  args: {
    children: text,
    endIcon: IconExternalLink,
    iconHref,
  },
};
