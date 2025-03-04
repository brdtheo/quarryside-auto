import { ReactElement } from "react";

export type SideDrawerProps = {
  children: ReactElement[] | ReactElement;
  isOpen: boolean;
  onClose: () => void;
};
