import { TablerIcon } from "@tabler/icons-react";

export type IconButtonProps = {
  className?: string;
  children: TablerIcon;
  size?: "xs" | "sm" | "lg";
  isDisabled?: boolean;
  badgeCount?: number;
  onClick: () => void;
};
