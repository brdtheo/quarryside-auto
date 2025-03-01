"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { IconInfoTriangle, IconX } from "@tabler/icons-react";

import clsx from "clsx";

import MediaSkeleton from "@/lib/media/MediaSkeleton";

import {
  ADVERTISING_BASE_URL,
  type AdvertisingProps,
  MAX_IMAGE_COUNT_PER_RATIO_MODE_MAPPER,
} from ".";

function AdvertisingHeader() {
  return (
    <div className="absolute top-0 right-0 flex bg-ad-background z-10">
      <button aria-label="Advertisement details" role="button">
        <IconInfoTriangle
          className="text-ad-text cursor-pointer hover:bg-gray-400"
          stroke={2}
          width={16}
          height={16}
        />
      </button>
      <button aria-label="Close advertisement" role="button">
        <IconX
          className="text-ad-text cursor-pointer hover:bg-gray-400"
          stroke={2}
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}

export default function Advertising({
  className,
  ratioMode,
}: AdvertisingProps) {
  const [generatedImageURL, setGeneratedImageURL] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (generatedImageURL || !ratioMode) {
      return;
    }
    setGeneratedImageURL(
      `${ADVERTISING_BASE_URL}/${ratioMode}/${ratioMode}_${Math.floor(
        Math.random() * MAX_IMAGE_COUNT_PER_RATIO_MODE_MAPPER[ratioMode],
      )}.jpg`,
    );
  }, []);

  return (
    <div
      className={clsx("relative", className, {
        "w-36 h-fit": ratioMode === "vertical",
        "w-full h-48": ratioMode === "horizontal",
      })}
    >
      <AdvertisingHeader />

      <Link
        target="_blank"
        href="#"
        aria-label="Follow advertisement link"
        role="button"
        className={clsx("block relative", {
          "w-36 h-[450px]": ratioMode === "vertical",
          "w-full h-48": ratioMode === "horizontal",
        })}
      >
        {generatedImageURL ? (
          <Image
            sizes={ratioMode === "vertical" ? "150px" : "200px"}
            className={clsx({
              "object-contain": ratioMode === "horizontal",
            })}
            src={generatedImageURL}
            alt="advertisement"
            fill
          />
        ) : (
          <MediaSkeleton />
        )}
      </Link>
    </div>
  );
}
