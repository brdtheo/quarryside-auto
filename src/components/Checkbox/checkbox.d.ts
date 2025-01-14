import { ChangeEventHandler } from "react";

export type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange?: ChangeEventHandler;
};
