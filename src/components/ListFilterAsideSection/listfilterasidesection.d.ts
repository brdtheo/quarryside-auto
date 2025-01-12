export type ListFilterAsideSectionProps = {
  title: string;
  options: { label: string; value: string; isChecked: boolean }[];
  isSearchable?: boolean;
  onChange: React.ChangeEventHandler;
};
