import { wheelFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import type { Meta, StoryObj } from "@storybook/react";

import WheelForm from ".";

const meta = {
  title: "Lib/Wheel/WheelForm",
  component: WheelForm,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "A form displayed in a wheel's detail page",
    },
  },
} satisfies Meta<typeof WheelForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;

export const Default: Story = { args: { wheel } };
