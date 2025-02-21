"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";

import { IconInfoTriangle, IconX } from "@tabler/icons-react";

import clsx from "clsx";

import {
  ADVERTISING_BASE_URL,
  ADVERTISING_RATIO_MODE_LIST,
  type AdvertisingProps,
  type AdvertisingRatioMode,
  MAX_IMAGE_COUNT_PER_RATIO_MODE_MAPPER,
} from ".";

export default function Advertising({
  className,
  ratioMode,
}: AdvertisingProps) {
  const [mode, setMode] = useState<AdvertisingRatioMode | null>(null);
  const [imageURL, setImageURL] = useState<string>("");

  useEffect(() => {
    if (!!mode && !!imageURL) {
      return;
    }
    const generatedMode =
      ratioMode ??
      ADVERTISING_RATIO_MODE_LIST[
        Math.floor(Math.random() * ADVERTISING_RATIO_MODE_LIST.length)
      ];

    const generatedImageURL = `${ADVERTISING_BASE_URL}/${generatedMode}/${generatedMode}_${Math.floor(
      Math.random() * MAX_IMAGE_COUNT_PER_RATIO_MODE_MAPPER[generatedMode],
    )}.jpg`;

    setMode(generatedMode);
    setImageURL(generatedImageURL);
  }, []);

  const imageDimensions = useMemo(() => {
    switch (mode) {
      case "horizontal":
        return {
          width: 400,
          height: 600,
        };
      case "vertical":
        return {
          width: 150,
          height: 500,
        };
      default:
        return null;
    }
  }, [mode]);

  return (
    <div
      className={clsx(
        `relative w-fit`,
        {
          "h-fit": mode === "vertical",
        },
        className,
      )}
    >
      <div className="absolute top-0 right-0 flex bg-ad-background">
        <button>
          <IconInfoTriangle
            className="text-ad-text cursor-pointer hover:bg-gray-400"
            stroke={2}
            width={16}
            height={16}
          />
        </button>
        <button>
          <IconX
            className="text-ad-text cursor-pointer hover:bg-gray-400"
            stroke={2}
            width={16}
            height={16}
          />
        </button>
      </div>
      <button className={clsx("w-fit h-fit")}>
        {!imageURL && !mode && !!imageDimensions && (
          <div
            style={{
              width: imageDimensions.width,
              height: imageDimensions.height,
            }}
          />
        )}
        {!!imageURL && mode && !!imageDimensions && (
          <img
            className={clsx({
              "w-[150px] h-[500px]": mode === "vertical",
              "w-max-[200px] h-[150px]": mode === "horizontal",
            })}
            src={imageURL}
            alt="advertisement"
            width={imageDimensions.width}
            height={imageDimensions.height}
          />
        )}
      </button>
    </div>
  );
}
