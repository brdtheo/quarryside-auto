import { ChangeEventHandler } from "react";

export type SearchFieldProps = {
  className?: string;
  value: string;
  onChange: ChangeEventHandler;
};
