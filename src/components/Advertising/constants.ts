import type { AdvertisingRatioMode } from ".";

export const ADVERTISING_RATIO_MODE_LIST: AdvertisingRatioMode[] = [
  "vertical",
  "horizontal",
];

export const ADVERTISING_BASE_URL =
  "https://qa-advertising.s3.eu-west-3.amazonaws.com";

export const MAX_IMAGE_COUNT_PER_RATIO_MODE_MAPPER: Record<
  AdvertisingRatioMode,
  number
> = {
  horizontal: 9,
  vertical: 23,
};
