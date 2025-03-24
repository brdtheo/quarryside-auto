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

  return (
    <div
      className={clsx("h-11 inline-flex items-center border-b-2", {
        "border-b-primary dark:border-b-primarydark": isActive,
        "border-b-transparent": !isActive,
      })}
    >
      <Link
        className={clsx("inline-flex items-center")}
        href={isDisabled ? "#" : `/${slug}`}
      >
        <Button
          size="sm"
          className={clsx({
            "dark:text-white hover:bg-gray-200/70 dark:hover:bg-white/20 transition-colors duration-100":
              !isDisabled,
            "text-gray-400 dark:text-gray-500": isDisabled,
          })}
          isDisabled={isDisabled}
          rounded
        >
          {label}
        </Button>
      </Link>
    </div>
  );
}
