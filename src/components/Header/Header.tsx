"use client";

import { useCallback, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { IconMenu2 } from "@tabler/icons-react";

import Container from "@/components/Container";
import HeaderSideDrawer from "@/components/HeaderSideDrawer";

import IconButton from "../IconButton";

export default function Header() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const handleOpenSideDrawer = useCallback(() => {
    document.body.classList.toggle("overflow-hidden");
    setIsSideDrawerOpen((state) => !state);
  }, []);

  const handleCloseSideDrawer = useCallback(() => {
    document.body.classList.remove("overflow-hidden");
    setIsSideDrawerOpen((state) => !state);
  }, []);

  return (
    <header className="w-full z-20 bg-primary dark:bg-black fixed md:static flex justify-center h-[72px]">
      <Container className="flex h-full justify-between items-center">
        <Link className="hidden md:block" href="/">
          <Image
            src="/quarryside_logo.png"
            alt="Quarryside Auto Sales company logo"
            width="340"
            height="38"
            placeholder="blur"
            blurDataURL="/quarryside_logo.png"
          />
        </Link>
        <Link className="md:hidden" href="/">
          <Image
            src="/quarryside_logo_mobile.png"
            alt="Quarryside Auto Sales company logo"
            width="120"
            height="36"
            placeholder="blur"
            blurDataURL="/quarryside_logo_mobile.png"
          />
        </Link>

        <nav className="hidden md:inline-flex gap-3">
          <Link href="#" className="text-white hover:underline text-sm">
            My Cart
          </Link>
          <Link href="#" className="text-white hover:underline text-sm">
            Account
          </Link>
        </nav>

        <IconButton
          onClick={handleOpenSideDrawer}
          className="text-white block md:hidden"
          size="sm"
        >
          <IconMenu2 size={20} stroke={2} />
        </IconButton>

        <HeaderSideDrawer
          onClose={handleCloseSideDrawer}
          isOpen={isSideDrawerOpen}
        />
      </Container>
    </header>
  );
}
