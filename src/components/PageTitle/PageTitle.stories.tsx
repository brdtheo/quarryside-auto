import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import PageTitle from ".";

const meta = {
  title: "Components/PageTitle",
  component: PageTitle,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Displays the page title and breadcrumbs",
    },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = faker.lorem.words(3);

export const Default: Story = {
  render: (args) => {
    return <PageTitle {...args} />;
  },
  args: {
    children: title,
  },
};
