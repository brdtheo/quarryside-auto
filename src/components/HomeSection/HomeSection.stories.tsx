import Image from "next/image";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import HomeSection from ".";

const meta = {
  title: "Components/HomeSection",
  component: HomeSection,
  parameters: {
    docs: {
      subtitle: "Displays a title and its related information in home page",
    },
  },
} satisfies Meta<typeof HomeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = faker.lorem.words(3);
const text = faker.lorem.paragraphs();
const image = faker.image.dataUri();

export const Default: Story = {
  render: (args) => {
    return <HomeSection title={args.title}>{args.children}</HomeSection>;
  },
  args: {
    title,
    children: (
      <>
        <p>{text}</p>
        <Image src={image} alt="" width={500} height={500} />
      </>
    ),
  },
};
