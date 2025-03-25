"use client";

import { startTransition } from "react";

import { Locale, useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import { IconCheck, IconWorld } from "@tabler/icons-react";

import clsx from "clsx";

import { DropdownMenu } from "radix-ui";

import { usePathname, useRouter } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("common");
  const currentLocale = useLocale();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (nextLocale: Locale) => () => {
    if (nextLocale === currentLocale) return;
    startTransition(() => {
      replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="text-white hover:bg-white/10 rounded px-2 flex items-center text-sm gap-1"
          aria-label="Change language"
        >
          {t(`locale.${currentLocale}`)}
          <IconWorld size={20} strokeWidth={1.2} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-44 rounded bg-white dark:bg-blacksecondary p-1"
          sideOffset={5}
          align="end"
        >
          {routing.locales.map((locale) => (
            <DropdownMenu.Item
              onClick={onSelectChange(locale)}
              key={locale}
              className="cursor-pointer gap-1 px-2 relative flex h-6 items-center text-sm hover:bg-black/10 dark:hover:bg-white/10 rounded outline-0"
            >
              <IconCheck
                className={clsx("invisible", {
                  visible: locale === currentLocale,
                })}
                size={16}
              />
              {t(`locale.${locale}`)}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
