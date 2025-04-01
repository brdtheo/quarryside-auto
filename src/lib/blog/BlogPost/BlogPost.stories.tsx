import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import BlogPost from ".";

const meta = {
  title: "Lib/Blog/BlogPost",
  component: BlogPost,
  parameters: {
    docs: {
      subtitle: "A blog post",
      story: {
        width: "500px",
      },
    },
  },
} satisfies Meta<typeof BlogPost>;

export default meta;
type Story = StoryObj<typeof meta>;

const thumbnailUrl = faker.image.url();
const thumbnailAlt = faker.word.words(5);
const tags = faker.helpers.multiple(() => faker.lorem.word(), { count: 3 });
const title = faker.lorem.sentence();
const content = faker.lorem.sentences(3);
const author = faker.person.fullName();
const date = faker.date.recent().toLocaleTimeString();

export const Default: Story = {
  args: {
    thumbnailUrl,
    thumbnailAlt,
    tags,
    title,
    content,
    author,
    date,
  },
};
