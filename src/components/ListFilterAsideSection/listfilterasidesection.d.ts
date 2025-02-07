export type ListFilterAsideSectionProps = {
  title: string;
  options: { label: string; value: string; isChecked: boolean; href: string }[];
  isSearchable?: boolean;
  selectedOptionCount: number;
};
