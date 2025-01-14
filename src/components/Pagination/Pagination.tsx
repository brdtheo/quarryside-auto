import clsx from "clsx";

import type { PaginationProps } from ".";

export default function Pagination({
  page,
  pageCount,
  disabled,
}: PaginationProps) {
  const pages = [...Array(pageCount).keys()].map((page) => page + 1);
  return (
    <div className="flex flex-1 justify-center">
      {(pages ?? []).map((currentPage, index) => (
        <button
          disabled={disabled}
          className={clsx("w-7 h-7 rounded", {
            "hover:bg-grey transition-colors duration-100":
              currentPage !== page,
            "bg-brown text-white": currentPage === page,
          })}
          key={index}
        >
          {currentPage}
        </button>
      ))}
    </div>
  );
}
