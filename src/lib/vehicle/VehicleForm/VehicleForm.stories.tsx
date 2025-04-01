import type { Meta, StoryObj } from "@storybook/react";

import VehicleForm from ".";

const meta = {
  title: "Lib/Vehicle/VehicleForm",
  component: VehicleForm,
  parameters: {
    docs: {
      subtitle: "A form displayed in a vehicle's detail page",
    },
  },
} satisfies Meta<typeof VehicleForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
