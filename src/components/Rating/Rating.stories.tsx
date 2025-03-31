import { Prisma } from "@prisma/client";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import Rating from ".";

const meta = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Displays the average user rating",
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

const score = new Prisma.Decimal(
  faker.number.int({ min: 0, multipleOf: 1, max: 5 }),
);

export const Default: Story = { args: { score, size: 16 } };
