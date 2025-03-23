import { TablerIcon } from "@tabler/icons-react";

export type HeaderSideDrawerListItemProps = {
  icon: TablerIcon;
  href: string;
  children: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};
