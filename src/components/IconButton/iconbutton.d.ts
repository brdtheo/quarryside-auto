import { ComponentProps } from "react";

import { TablerIcon } from "@tabler/icons-react";

export type IconButtonProps = ComponentProps<"button"> & {
  className?: string;
  icon: TablerIcon;
  size?: "xs" | "sm" | "lg";
  badgeCount?: number;
  onClick: () => void;
};
