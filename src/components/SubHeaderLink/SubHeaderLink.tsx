"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import clsx from "clsx";

import Button from "@/components/Button";

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
        className={clsx("py-2 px-4")}
        variant="text"
        fontWeight="regular"
        fontSize="sm"
        isDisabled
      >
        {label}
      </Button>
    );

  return (
    <Link href={`/${slug}`}>
      <Button
        className={clsx("py-2 px-4", {
          "border-b-2 border-b-brown": isActive,
        })}
        variant="text"
        fontWeight="regular"
        fontSize="sm"
      >
        {label}
      </Button>
    </Link>
  );
}
