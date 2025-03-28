import { ChangeEventHandler, ComponentProps } from "react";

export type SearchFieldProps = ComponentProps<"search"> & {
  className?: string;
  value: string;
  isDisabled?: boolean;
  isClearable?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSearch?: (value: string) => void;
  onClear?: () => void;
};
