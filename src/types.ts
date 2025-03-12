import type { UrlObject } from "url";

export type PageSearchParams = { [key: string]: string };

/** A common type that represents page props */
export type PageProps = { searchParams: Promise<PageSearchParams> };

/** Common type used by href from Link elements */
export type Url = string | UrlObject;

/** A common type that represents details page props */
export type DetailsPageProps = {
  params: Promise<{ slug: string }>;
};
