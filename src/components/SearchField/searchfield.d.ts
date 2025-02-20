import { ChangeEventHandler } from "react";

export type SearchFieldProps = {
  className?: string;
  value: string;
  isDisabled?: boolean;
  onChange: ChangeEventHandler;
};
