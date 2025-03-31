import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import Table from ".";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    docs: {
      subtitle: "Displays data through cells format",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const rowSingleData = [
  {
    name: faker.lorem.word(),
    data: faker.lorem.words(2),
  },
];

const rowMultipleData = [
  {
    name: faker.lorem.word(),
    data: faker.helpers.multiple(() => faker.lorem.words(2), { count: 3 }),
  },
];

export const SingularDataValue: Story = {
  args: { rows: rowSingleData },
};

export const MultipleDataValues: Story = {
  args: { rows: rowMultipleData },
};
