import { IconUser } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import BenefitCard from ".";

const meta = {
  title: "Components/BenefitCard",
  component: BenefitCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
  },
} satisfies Meta<typeof BenefitCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = faker.lorem.words();
const description = faker.lorem.sentences(5);
const icon = IconUser;

export const Default: Story = {
  args: {
    title,
    description,
    icon,
  },
};
