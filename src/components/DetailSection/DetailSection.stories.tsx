import Image from "next/image";

import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import DetailSection from ".";

const meta = {
  title: "Components/DetailSection",
  component: DetailSection,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Display a title and its related information",
    },
  },
} satisfies Meta<typeof DetailSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = faker.lorem.words(2);
const text = faker.lorem.paragraphs();
const image = faker.image.dataUri();

export const Default: Story = {
  render: (args) => {
    return <DetailSection title={args.title}>{args.children}</DetailSection>;
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
