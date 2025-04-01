import type { Meta, StoryObj } from "@storybook/react";

import BlogPostList from ".";

const meta = {
  title: "Lib/Blog/BlogPostList",
  component: BlogPostList,
  parameters: {
    docs: {
      subtitle: "A blog post",
    },
  },
} satisfies Meta<typeof BlogPostList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
