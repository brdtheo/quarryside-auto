import { useCallback } from "react";

import clsx from "clsx";

import type { TableProps } from ".";

export default function Table({ rows }: TableProps) {
  const getPaddingClass = useCallback(
    (index: number) => {
      switch (index) {
        case 0:
          return "pb-3";
        case rows?.length - 1:
          return "pt-3";
        default:
          return "py-3";
      }
    },
    [rows?.length],
  );

  const getBorderClass = useCallback(
    (index: number) => {
      switch (index) {
        case rows?.length - 1:
          return "";
        default:
          return "border-b border-b-divider dark:border-b-dividerdark";
      }
    },
    [rows?.length],
  );

  return (
    <table className="w-full @md:w-3/4">
      <tbody>
        {(rows ?? []).map((row, index) => {
          if (Array.isArray(row.data)) {
            return (
              <tr key={index} className={getBorderClass(index)}>
                <th
                  className={clsx(
                    "text-sm font-semibold text-left align-top",
                    getPaddingClass(index),
                  )}
                >
                  {row.name}
                </th>
                <td
                  className={clsx(
                    "font-regular text-sm",
                    getPaddingClass(index),
                  )}
                >
                  <ul className="flex flex-col">
                    {(row.data ?? []).map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            );
          }
          return (
            <tr key={index} className={getBorderClass(index)}>
              <th
                className={clsx(
                  "text-sm font-semibold text-left",
                  getPaddingClass(index),
                )}
              >
                {row.name}
              </th>
              <td
                className={clsx("font-regular text-sm", getPaddingClass(index))}
              >
                {row.data}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
