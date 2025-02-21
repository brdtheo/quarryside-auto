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

import SideDrawer from "@/components/SideDrawer";

import { Link } from "@/i18n/routing";

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
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="/"
            >
              <IconHome size={20} stroke={1.75} />
              <h5 className="text-sm">{t("navigation.home")}</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="/vehicles"
            >
              <IconCar size={20} stroke={1.75} />
              <h5 className="text-sm">{t("navigation.usedVehicles.title")}</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="/wheels"
            >
              <IconWheel size={20} stroke={1.75} />
              <h5 className="text-sm">{t("navigation.rimsTires.title")}</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconBriefcase size={20} stroke={1.75} />
              <h5 className="text-sm">{t("navigation.careers.title")}</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconLifebuoy size={20} stroke={1.75} />
              <h5 className="text-sm">{t("navigation.helpCenter.title")}</h5>
            </Link>
          </li>
          <li className="px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconInfoCircle size={20} stroke={1.75} />
              <h5 className="text-sm">{t("navigation.about.title")}</h5>
            </Link>
          </li>
        </ul>

        <ul>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconShoppingCart size={20} stroke={1.75} />
              <h5 className="text-sm">{t("header.myCart")}</h5>
            </Link>
          </li>
          <li className="px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconUser size={20} stroke={1.75} />
              <h5 className="text-sm">{t("header.account")}</h5>
            </Link>
          </li>
        </ul>
      </nav>
    </SideDrawer>
  );
}
