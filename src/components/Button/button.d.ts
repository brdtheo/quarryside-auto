import { ReactElement } from "react";

export type ButtonProps = {
  className?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: string;
  size?: "xs" | "sm" | "lg";
  color?: "primary" | "secondary";
  rounded?: boolean;
  isDisabled?: boolean;
};
