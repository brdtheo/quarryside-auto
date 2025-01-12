"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import clsx from "clsx";

import Button from "@/components/Button";
import Container from "@/components/Container";

import { subheaderLinkList } from "./constants";
import type { SubHeaderLinkProps } from "./subheader";

function SubHeaderLink({ slug, label, isDisabled }: SubHeaderLinkProps) {
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

export default function SubHeader() {
  return (
    <div className="bg-white flex justify-center">
      <Container className="flex justify-center items-center">
        <nav className="inline-flex">
          {(subheaderLinkList ?? []).map((link, index) => (
            <SubHeaderLink
              isDisabled={link.isDisabled}
              key={index}
              slug={link.slug}
              label={link.label}
            />
          ))}
        </nav>
      </Container>
    </div>
  );
}
