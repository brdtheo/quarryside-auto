/**
 * Parse row data to handle array of strings
 * @param value The row data value
 * @returns {string | string[]}
 */
export function parseRowData(value: unknown): string | string[] {
  if (Array.isArray(value)) {
    return value.map(String);
  }

  if (typeof value !== "string") {
    return "";
  }

  const input = value.trim();

  // handle PostgreSQL array {"a","b","c"}
  if (input.startsWith("{") && input.endsWith("}")) {
    const inner = input.slice(1, -1);

    if (!inner) {
      return [];
    }

    return inner
      .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
      .map((item) => item.trim().replace(/^"|"$/g, ""))
      .filter(Boolean);
  }

  return value;
}
