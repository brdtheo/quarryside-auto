import { ChangeEventHandler } from "react";

export type TextFieldProps = {
  className?: string;
  isTextArea?: boolean;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler;
};
