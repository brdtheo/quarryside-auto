"use client";

import Link from "next/link";

import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";

import clsx from "clsx";

import useURLSearchParams from "@/hooks/useURLSearchParams";

import type { PaginationProps } from ".";

export default function Pagination({
  page = 1,
  pageCount,
  searchParams,
}: PaginationProps) {
  const pageIndexThreshold = 2;
  const pages = [...Array(pageCount).keys()].map((page) => page + 1);

  const lastPage = pages.length;

  const { getUpdatedURLFromSearchParam } = useURLSearchParams(searchParams);

  return (
    <div className="flex flex-1 justify-center gap-1">
      {page !== 1 && (
        <Link
          href={getUpdatedURLFromSearchParam("page", "1")}
          className="dark:text-white w-7 h-7 rounded inline-flex items-center justify-center hover:bg-grey transition-colors duration-100"
        >
          <IconChevronsLeft strokeWidth={1.5} size={20} />
        </Link>
      )}

      {(pages ?? []).map((currentPage, index) => {
        if (
          currentPage < page - pageIndexThreshold ||
          currentPage > page + pageIndexThreshold
        ) {
          return null;
        }
        return (
          <Link
            href={getUpdatedURLFromSearchParam("page", `${currentPage}`)}
            className={clsx(
              "w-7 h-7 rounded inline-flex items-center justify-center",
              {
                "hover:bg-grey transition-colors duration-100 dark:text-white":
                  currentPage !== page,
                "bg-primary dark:bg-primarydark text-white dark:text-black":
                  currentPage === page,
              },
            )}
            key={index}
          >
            {currentPage}
          </Link>
        );
      })}

      {page !== lastPage && (
        <Link
          href={getUpdatedURLFromSearchParam("page", `${lastPage}`)}
          className="dark:text-white w-7 h-7 rounded inline-flex items-center justify-center hover:bg-grey transition-colors duration-100"
        >
          <IconChevronsRight strokeWidth={1.5} size={20} />
        </Link>
      )}
    </div>
  );
}
