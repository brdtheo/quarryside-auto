import VehicleCard from "@/lib/vehicle/VehicleCard";
import { vehicleListFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import type { Meta, StoryObj } from "@storybook/react";

import VehicleList from ".";

const meta = {
  title: "Lib/Vehicle/VehicleList",
  component: VehicleList,
  parameters: {
    docs: {
      subtitle: "Display a list of vehicles",
    },
  },
} satisfies Meta<typeof VehicleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const vehicles = vehicleListFactory(2, {
  withMedia: true,
}) as VehicleWithMedias[];

export const VehicleCardRender: Story = {
  args: {
    data: vehicles,
    itemRender: (vehicle) => (
      <li key={vehicle.id}>
        <VehicleCard vehicle={vehicle} />
      </li>
    ),
  },
};

export const CustomRender: Story = {
  args: {
    data: vehicles,
    itemRender: (vehicle) => (
      <li className="bg-primary rounded" key={vehicle.id}>
        <div className="text-white p-4">
          <h1>{vehicle.brand}</h1>
          <p>{vehicle.model}</p>
        </div>
      </li>
    ),
  },
};
