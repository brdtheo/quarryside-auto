import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import ListFilterAsideSection from ".";

const meta = {
  title: "Components/ListFilterAsideSection",
  component: ListFilterAsideSection,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A section containing filters for search results",
    },
  },
} satisfies Meta<typeof ListFilterAsideSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = faker.lorem.words(2);
const count = faker.number.int({ min: 1, max: 99 });
const options = faker.helpers.multiple(
  () => ({
    label: faker.word.noun({ length: { min: 5, max: 10 } }),
    value: faker.string.alphanumeric(5).toUpperCase(),
    isChecked: faker.datatype.boolean(0.4),
    href: faker.internet.url(),
  }),
  { count: 3 },
);

export const Default: Story = {
  args: {
    title,
    options,
    isSearchable: false,
    selectedOptionCount: 0,
  },
};

export const Searchable: Story = {
  args: {
    title,
    options,
    isSearchable: true,
    selectedOptionCount: 0,
  },
};

export const WithOptionsCount: Story = {
  args: {
    title,
    options,
    isSearchable: false,
    selectedOptionCount: count,
  },
};
