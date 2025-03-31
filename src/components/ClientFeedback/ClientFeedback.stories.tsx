import { faker } from "@faker-js/faker";

import dayjs from "dayjs";

import type { Meta, StoryObj } from "@storybook/react";

import ClientFeedback from ".";

const meta = {
  title: "Components/ClientFeedback",
  component: ClientFeedback,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A quote from a company customer",
    },
  },
} satisfies Meta<typeof ClientFeedback>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = faker.person.bio();
const author = faker.person.fullName();
const date = dayjs(faker.date.past()).format("DD/MM/YYYY");

export const Default: Story = {
  args: {
    children: text,
    author,
    date,
  },
};
