export type ListFilterAsideSectionProps = {
  title: string;
  options: ListFilterAsideSectionOption[];
  isSearchable?: boolean;
  selectedOptionCount: number;
};

export type ListFilterAsideSectionOption = {
  label: string;
  value: string;
  isChecked: boolean;
  href: string;
};
