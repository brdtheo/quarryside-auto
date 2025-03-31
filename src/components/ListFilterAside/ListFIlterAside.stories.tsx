import { faker } from "@faker-js/faker";

import { ListFilterAsideSectionProps } from "@/components/ListFilterAsideSection";

import type { Meta, StoryObj } from "@storybook/react";

import ListFilterAside from ".";

const meta = {
  title: "Components/ListFilterAside",
  component: ListFilterAside,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A list of all available filters for search results",
    },
  },
} satisfies Meta<typeof ListFilterAside>;

export default meta;
type Story = StoryObj<typeof meta>;

const sections: ListFilterAsideSectionProps[] = faker.helpers.multiple(
  () => ({
    title: faker.lorem.word(),
    options: faker.helpers.multiple(
      () => ({
        label: faker.lorem.word(),
        value: faker.lorem.word().toUpperCase(),
        isChecked: faker.datatype.boolean(),
        href: faker.internet.url(),
      }),
      { count: 3 },
    ),
    isSearchable: faker.datatype.boolean(),
    selectedOptionCount: faker.number.int(10),
  }),
  { count: 3 },
);
const namespace = faker.helpers.arrayElement(["vehicles", "wheels"]);

export const Default: Story = {
  args: {
    sections,
    searchParams: {},
    nameSpace: namespace,
  },
};
