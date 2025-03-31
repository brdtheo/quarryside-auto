import { IconSettings } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import HeaderSideDrawerListItem from ".";

const meta = {
  title: "Components/HeaderSideDrawerListItem",
  component: HeaderSideDrawerListItem,
  parameters: {
    docs: {
      subtitle: "A list item within header side drawer list",
    },
  },
} satisfies Meta<typeof HeaderSideDrawerListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = faker.lorem.word(10);
const url = faker.internet.url();

export const Default: Story = {
  args: {
    icon: IconSettings,
    href: url,
    children: text,
    onClick: fn(),
  },
};
