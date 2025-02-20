"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import clsx from "clsx";

import Button from "@/components/Button";

import { Link } from "@/i18n/routing";

import type { SubHeaderLinkProps } from ".";

export default function SubHeaderLink({
  slug,
  label,
  isDisabled,
}: SubHeaderLinkProps) {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  if (isDisabled)
    return (
      <Button
        size="sm"
        className={clsx("text-gray-400 dark:text-gray-500")}
        isDisabled
      >
        {label}
      </Button>
    );

  return (
    <Link className="h-fit" href={`/${slug}`}>
      <Button
        size="sm"
        className={clsx("dark:text-white", {
          "bg-primary text-white dark:bg-blacksecondary": isActive,
        })}
        rounded
      >
        {label}
      </Button>
    </Link>
  );
}
