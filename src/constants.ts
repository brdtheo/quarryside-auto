/** A list of search param names to exclude when computing URL method results */
export const APPLIED_FILTER_BLACKLIST = ["page"];

export const DOMAIN_URL = "https://www.quarryside-auto.com";

export const OPEN_GRAPH_IMAGE_URL =
  "https://quarryside-auto-misc.s3.eu-west-3.amazonaws.com/og_image.jpg";

/** playwright constants */
export const LOCAL_URL = "http://127.0.0.1:3000";
export const HOME_PAGE_TITLE_REGEX = /explore beamng vehicles and auto parts/i;
export const VEHICLES_PAGE_TITLE_REGEX = /beamng vehicles for sale/i;
export const LOCAL_VEHICLES_PAGE_URL = `${LOCAL_URL}/vehicles`;
export const WHEELS_PAGE_TITLE_REGEX = /beamng wheels for sale/i;
export const LOCAL_WHEELS_PAGE_URL = `${LOCAL_URL}/wheels`;
