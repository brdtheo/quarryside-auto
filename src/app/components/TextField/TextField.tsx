import clsx from "clsx";

import type { TextFieldProps } from ".";

export default function TextField({
  className,
  value,
  isTextArea,
  placeholder,
  onChange,
}: TextFieldProps) {
  if (isTextArea) {
    return (
      <textarea
        placeholder={placeholder}
        className={clsx(
          "flex border border-brown rounded bg-white min-h-12 p-3 w-full bg-transparent outline-none text-sm resize-none",
          className,
        )}
      />
    );
  }

  return (
    <div
      className={clsx(
        "flex border border-brown rounded bg-white h-8 pl-3 w-fit",
        className,
      )}
    >
      {!isTextArea && (
        <input
          placeholder={placeholder}
          className="h-full w-full bg-transparent outline-none text-sm pr-3"
          type="search"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
