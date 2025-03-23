import { useTranslations } from "next-intl";

import {
  IconBriefcase,
  IconCar,
  IconHome,
  IconInfoCircle,
  IconLifebuoy,
  IconShoppingCart,
  IconUser,
  IconWheel,
} from "@tabler/icons-react";

import HeaderSideDrawerListItem from "@/components/HeaderSideDrawerListItem";
import SideDrawer from "@/components/SideDrawer";

import type { HeaderSideDrawerProps } from ".";

export default function HeaderSideDrawer({
  isOpen,
  onClose,
}: HeaderSideDrawerProps) {
  const t = useTranslations("common");

  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      <nav className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col">
          <HeaderSideDrawerListItem icon={IconHome} href="/" onClick={onClose}>
            {t("navigation.home")}
          </HeaderSideDrawerListItem>
          <HeaderSideDrawerListItem
            icon={IconCar}
            href="/vehicles"
            onClick={onClose}
          >
            {t("navigation.usedVehicles.title")}
          </HeaderSideDrawerListItem>
          <HeaderSideDrawerListItem
            icon={IconWheel}
            href="/wheels"
            onClick={onClose}
          >
            {t("navigation.rimsTires.title")}
          </HeaderSideDrawerListItem>
          <HeaderSideDrawerListItem
            icon={IconBriefcase}
            href="#"
            onClick={onClose}
          >
            {t("navigation.careers.title")}
          </HeaderSideDrawerListItem>
          <HeaderSideDrawerListItem
            icon={IconLifebuoy}
            href="#"
            onClick={onClose}
          >
            {t("navigation.helpCenter.title")}
          </HeaderSideDrawerListItem>
          <HeaderSideDrawerListItem
            icon={IconInfoCircle}
            href="#"
            onClick={onClose}
          >
            {t("navigation.about.title")}
          </HeaderSideDrawerListItem>
        </ul>

        <ul>
          <HeaderSideDrawerListItem
            icon={IconShoppingCart}
            href="#"
            onClick={onClose}
          >
            {t("header.myCart")}
          </HeaderSideDrawerListItem>
          <HeaderSideDrawerListItem icon={IconUser} href="#" onClick={onClose}>
            {t("header.account")}
          </HeaderSideDrawerListItem>
        </ul>
      </nav>
    </SideDrawer>
  );
}
