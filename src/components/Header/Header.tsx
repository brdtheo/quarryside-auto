"use client";

import { useCallback, useState } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { IconMenu2 } from "@tabler/icons-react";

import Container from "@/components/Container";
import HeaderSideDrawer from "@/components/HeaderSideDrawer";
import IconButton from "@/components/IconButton";

import { Link } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("common");
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
        <Link aria-label="Home page" className="hidden md:block" href="/">
          <Image
            src="/quarryside_logo.png"
            alt="Quarryside Auto Sales company logo"
            width="340"
            height="38"
            placeholder="blur"
            blurDataURL="/quarryside_logo.png"
          />
        </Link>
        <Link aria-label="Home page" className="md:hidden" href="/">
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
            {t("header.myCart")}
          </Link>
          <Link href="#" className="text-white hover:underline text-sm">
            {t("header.account")}
          </Link>
        </nav>

        <IconButton
          onClick={handleOpenSideDrawer}
          className="text-white block md:hidden"
          size="sm"
        >
          {IconMenu2}
        </IconButton>

        <HeaderSideDrawer
          onClose={handleCloseSideDrawer}
          isOpen={isSideDrawerOpen}
        />
      </Container>
    </header>
  );
}
