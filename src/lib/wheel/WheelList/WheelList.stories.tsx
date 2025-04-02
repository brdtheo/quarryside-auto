import WheelCard from "@/lib/wheel/WheelCard";
import { wheelListFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";

import type { Meta, StoryObj } from "@storybook/react";

import WheelList from ".";

const meta = {
  title: "Lib/Wheel/WheelList",
  component: WheelList,
  parameters: {
    docs: {
      subtitle: "Display a list of wheels",
    },
  },
} satisfies Meta<typeof WheelList>;

export default meta;
type Story = StoryObj<typeof meta>;

const wheels = wheelListFactory(5, {
  withMedia: true,
}) as WheelWithMedias[];

export const VehicleCardRender: Story = {
  args: {
    data: wheels,
    itemRender: (wheel) => (
      <li key={wheel.id}>
        <WheelCard wheel={wheel} />
      </li>
    ),
  },
};

export const CustomRender: Story = {
  args: {
    data: wheels,
    itemRender: (wheel) => (
      <li className="bg-primary rounded" key={wheel.id}>
        <div className="text-white p-4">
          <h1>{wheel.brand}</h1>
          <p>{wheel.model}</p>
        </div>
      </li>
    ),
  },
};
