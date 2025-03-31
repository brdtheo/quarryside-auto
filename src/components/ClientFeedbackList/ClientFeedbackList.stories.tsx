import type { Meta, StoryObj } from "@storybook/react";

import ClientFeedbackList from ".";

const meta = {
  title: "Components/ClientFeedbackList",
  component: ClientFeedbackList,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A list of company customer quotes",
    },
  },
} satisfies Meta<typeof ClientFeedbackList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
