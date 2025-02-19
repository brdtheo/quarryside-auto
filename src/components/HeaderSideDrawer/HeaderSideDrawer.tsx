import Link from "next/link";

import {
  IconBriefcase,
  IconCar,
  IconHome,
  IconInfoCircle,
  IconLifebuoy,
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
      <nav>
        <ul className="flex flex-col">
          <li className="border-b border-b-divider px-2 py-3">
            <Link onClick={onClose} className="flex gap-3" href="/">
              <IconHome size={24} stroke={2} />
              <h5 className="text-base">Home</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link onClick={onClose} className="flex gap-3" href="/vehicles">
              <IconCar size={24} stroke={2} />
              <h5 className="text-base">Used vehicles</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link onClick={onClose} className="flex gap-3" href="/wheels">
              <IconWheel size={24} stroke={2} />
              <h5 className="text-base">Rims & tires</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link onClick={onClose} className="flex gap-3" href="#">
              <IconBriefcase size={24} stroke={2} />
              <h5 className="text-base">Careers</h5>
            </Link>
          </li>
          <li className="border-b border-b-divider px-2 py-3">
            <Link onClick={onClose} className="flex gap-3" href="#">
              <IconLifebuoy size={24} stroke={2} />
              <h5 className="text-base">Help center</h5>
            </Link>
          </li>
          <li className="px-2 py-3">
            <Link onClick={onClose} className="flex gap-3" href="#">
              <IconInfoCircle size={24} stroke={2} />
              <h5 className="text-base">About</h5>
            </Link>
          </li>
        </ul>
      </nav>
    </SideDrawer>
  );
}
