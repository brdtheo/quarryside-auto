import Link from "next/link";

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

import type { HeaderSideDrawerProps } from ".";

export default function HeaderSideDrawer({
  isOpen,
  onClose,
}: HeaderSideDrawerProps) {
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
              <h5 className="text-sm">Home</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="/vehicles"
            >
              <IconCar size={20} stroke={1.75} />
              <h5 className="text-sm">Used vehicles</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="/wheels"
            >
              <IconWheel size={20} stroke={1.75} />
              <h5 className="text-sm">Rims & tires</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconBriefcase size={20} stroke={1.75} />
              <h5 className="text-sm">Careers</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconLifebuoy size={20} stroke={1.75} />
              <h5 className="text-sm">Help center</h5>
            </Link>
          </li>
          <li className="px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconInfoCircle size={20} stroke={1.75} />
              <h5 className="text-sm">About</h5>
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
              <h5 className="text-sm">My cart</h5>
            </Link>
          </li>
          <li className="px-2 py-3">
            <Link
              onClick={onClose}
              className="flex items-center gap-3"
              href="#"
            >
              <IconUser size={20} stroke={1.75} />
              <h5 className="text-sm">Account</h5>
            </Link>
          </li>
        </ul>
      </nav>
    </SideDrawer>
  );
}
