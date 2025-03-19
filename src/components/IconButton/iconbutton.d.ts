import { TablerIcon } from "@tabler/icons-react";
import { ComponentProps } from "react";

export type IconButtonProps = ComponentProps<"button"> & {
  className?: string;
  children: TablerIcon;
  size?: "xs" | "sm" | "lg";
  badgeCount?: number;
  onClick: () => void;
};
