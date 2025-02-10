"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";

import { IconInfoTriangle, IconX } from "@tabler/icons-react";

import clsx from "clsx";

import type { AdvertisingProps, AdvertisingRatioMode } from ".";

const RATIO_MODE_LIST: AdvertisingRatioMode[] = ["vertical", "horizontal"];

const BASE_URL = "https://qa-advertising.s3.eu-west-3.amazonaws.com";

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
      RATIO_MODE_LIST[Math.floor(Math.random() * RATIO_MODE_LIST.length)];
    const modeMaxMapper = {
      horizontal: 9, // max available image count
      vertical: 23, // max available image count
    };

    const generatedImageURL = `${BASE_URL}/${generatedMode}/${generatedMode}_${Math.floor(
      Math.random() * modeMaxMapper[generatedMode],
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
