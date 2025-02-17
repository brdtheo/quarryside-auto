import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";

export default function Header() {
  const { t } = useTranslation("common");

  return (
    <header className="bg-primary dark:bg-black flex justify-center h-[72px]">
      <Container className="flex justify-between items-center">
        <Image
          src="/quarryside_logo.png"
          alt="Quarryside Auto Sales company logo"
          width="340"
          height="38"
          placeholder="blur"
          blurDataURL="/quarryside_logo.png"
        />

        <nav className="inline-flex gap-3">
          <Link href="#" className="text-white hover:underline text-sm">
            {t("header.myCart")}
          </Link>
          <Link href="#" className="text-white hover:underline text-sm">
            {t("header.account")}
          </Link>
        </nav>
      </Container>
    </header>
  );
}
