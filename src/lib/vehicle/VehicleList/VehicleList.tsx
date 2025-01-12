import type { VehicleListProps } from "./vehiclelist";

export default function VehicleList({ data, itemRender }: VehicleListProps) {
  return (
    <ul className="flex-1 flex flex-col gap-4">
      {(data ?? []).map(itemRender)}
    </ul>
  );
}
