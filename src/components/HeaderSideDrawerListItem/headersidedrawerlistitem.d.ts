import { ReactElement } from "react";

export type HeaderSideDrawerListItemProps = {
  icon: ReactElement;
  href: string;
  children: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};
