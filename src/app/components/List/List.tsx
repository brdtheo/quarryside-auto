import type { ListProps } from "./list";

export default function List<T>({ data, itemRender }: ListProps<T>) {
  return (
    <ul className="flex-1 flex flex-col gap-4">
      {(data ?? []).map(itemRender)}
    </ul>
  );
}
