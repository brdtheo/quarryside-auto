import type { PageSearchParams } from "@/types";

export type PaginationProps = {
  page: number;
  pageCount: number;
  searchParams: PageSearchParams;
};
