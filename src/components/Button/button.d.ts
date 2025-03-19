import { ComponentProps, ReactElement } from "react";

export type ButtonProps = ComponentProps<'button'> & {
  className?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: string;
  size?: "xs" | "sm" | "lg";
  color?: "primary" | "secondary";
  rounded?: boolean;
};
