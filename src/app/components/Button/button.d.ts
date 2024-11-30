import { ReactElement } from "react";

export type ButtonProps = {
  className?: string;
  startIcon?: ReactElement;
  children: string;
  variant?: "outlined" | "contained" | "text";
  endIcon?: ReactElement;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number;
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  isDisabled?: boolean;
};
