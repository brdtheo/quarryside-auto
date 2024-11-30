export type ListProps<T = unknown> = {
  data: T[];
  itemRender: (item: T) => JSX.Element;
};
