import { IconUser } from "@tabler/icons-react";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import BenefitList from ".";

const meta = {
  title: "Components/BenefitList",
  component: BenefitList,
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "A list of company services shown on the home page",
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
  },
} satisfies Meta<typeof BenefitList>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = faker.lorem.words();
const description = faker.lorem.sentences(5);
const icon = <IconUser />;

export const Default: Story = {
  args: {
    title,
    description,
    icon,
  },
};
