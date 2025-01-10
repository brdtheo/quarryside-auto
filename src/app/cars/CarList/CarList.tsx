import type { CarListProps } from "./carlist";

export default function CarList({ data, itemRender }: CarListProps) {
  return (
    <ul className="flex-1 flex flex-col gap-4">
      {(data ?? []).map(itemRender)}
    </ul>
  );
}
