"use client";

import { Fragment, useCallback, useMemo } from "react";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { IconChevronRight } from "@tabler/icons-react";

import { Link } from "@/i18n/routing";

function BreadcrumbSeparator() {
  return (
    <li>
      <span className="w-6 inline-flex justify-center items-center select-none text-xs">
        <IconChevronRight size={16} />
      </span>
    </li>
  );
}

export default function Breadcrumbs() {
  const t = useTranslations("common");
  const paths = usePathname();
  const pathNames = useMemo(
    () => paths.split("/").filter((path, index) => path && index !== 1),
    [paths],
  );

  const getBreadcrumbHref = useCallback((index: number) => {
    return `/${pathNames.slice(0, index + 1).join("/")}`;
  }, []);

  const getBreadcrumbTitle = useCallback((value: string) => {
    return value.replaceAll("-", " ");
  }, []);

  return (
    <ul className="inline-flex items-center text-sm">
      <li className="flex gap-2">
        <Link href="/">{t("navigation.home")}</Link>
      </li>

      <BreadcrumbSeparator />

      {pathNames.map((link, index) => {
        return (
          <Fragment key={index}>
            <li className="line-clamp-1">
              <Link className="capitalize" href={getBreadcrumbHref(index)}>
                {getBreadcrumbTitle(link)}
              </Link>
            </li>
            {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
          </Fragment>
        );
      })}
    </ul>
  );
}
