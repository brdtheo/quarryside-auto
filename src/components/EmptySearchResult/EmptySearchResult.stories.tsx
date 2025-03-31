import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import EmptySearchResult from ".";

const meta = {
  title: "Components/EmptySearchResult",
  component: EmptySearchResult,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Placeholder displayed when no search results are available",
    },
  },
} satisfies Meta<typeof EmptySearchResult>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = faker.lorem.words(3);

export const Default: Story = { args: { title } };
