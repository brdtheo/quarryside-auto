import { ChangeEventHandler } from "react";

export type SelectOption = { label: string; value: string };

export type SelectProps = {
  className?: string;
  placeholder?: string;
  options: SelectOption[];
  value: string;
  onChange?: ChangeEventHandler;
};
