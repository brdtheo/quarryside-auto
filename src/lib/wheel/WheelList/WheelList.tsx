import type { WheelListProps } from "./wheellist";

export default function WheelList({ data, itemRender }: WheelListProps) {
  return (
    <ul className="flex-1 grid grid-cols-4 gap-8">
      {(data ?? []).map(itemRender)}
    </ul>
  );
}
