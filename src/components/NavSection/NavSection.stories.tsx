import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";

import NavSection from ".";

const meta = {
  title: "Components/NavSection",
  component: NavSection,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A navigation group displayed in the footer",
    },
  },
} satisfies Meta<typeof NavSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = faker.word.noun();
const titleHref = faker.internet.url();
const links = faker.helpers.multiple(
  () => ({
    title: faker.lorem.word(),
    href: faker.internet.url(),
    isTargetBlank: faker.datatype.boolean(),
  }),
  { count: 3 },
);

export const Default: Story = {
  render: (args) => {
    return (
      <div className="bg-primary p-4">
        <NavSection {...args} />
      </div>
    );
  },
  args: {
    title,
    titleHref,
    links,
  },
};
