import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import Pagination from ".";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A navigation element for search results",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const pageCount = faker.number.int({ min: 10, max: 20 });

export const Default: Story = {
  args: {
    page: 1,
    pageCount,
    searchParams: {},
  },
};
