import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { IconArrowRight } from "@tabler/icons-react";

import Button from "@/components/Button";

import { Link } from "@/i18n/routing";

export default async function HomeHero() {
  const t = await getTranslations("home");
  return (
    <div
      className="w-full h-[200px] xl:h-[400px] relative flex items-center justify-center flex-col gap-3 select-none px-8 py-4"
      role="presentation"
    >
      <Image
        className="w-full object-cover brightness-[0.65]"
        fill
        sizes="100vw"
        src="https://quarryside-auto-misc.s3.eu-west-3.amazonaws.com/hero.jpg"
        alt="Lined Ibishu Pessima cars"
      />

      <div className="flex items-center justify-center text-center flex-col gap-2 xl:gap-6 z-10 text-white max-w-[800px]">
        <h1 className="text-xl xl:text-4xl font-bold">{t("hero.title")}</h1>
        <span className="hidden sm:block text-base xl:text-lg font-medium">
          {t("hero.subtitle")}
        </span>
      </div>

      <div className="hidden lg:flex gap-3 z-10 pt-2 xl:pt-8">
        <Link href="/vehicles">
          <Button
            endIcon={<IconArrowRight size={16} />}
            rounded
            color="primary"
          >
            {t("hero.browseUsedCars")}
          </Button>
        </Link>
        <Link href="/wheels">
          <Button
            endIcon={<IconArrowRight size={16} />}
            rounded
            color="primary"
          >
            {t("hero.browseRimsTires")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
