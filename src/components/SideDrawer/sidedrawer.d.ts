import { ReactElement } from "react";

export type SideDrawerProps = {
  children: ReactElement;
  isOpen: boolean;
  onClose: () => void;
};
