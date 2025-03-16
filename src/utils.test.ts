import { describe, expect, test } from "vitest";

import { getHomeFindManyArgs } from "@/utils";

describe("Utils", () => {
  test("Retrieves Prisma args for home page", () => {
    const args = getHomeFindManyArgs();
    expect(args).toStrictEqual({
      where: {
        slug: {
          in: [
            "gavril-d-series-d15-v8-4wd",
            "gavril-roamer-v8-automatic",
            "soliad-lansdale-2-5-facelift",
          ],
        },
      },
      include: {
        medias: { where: { is_thumbnail: true } },
      },
    });
  });
});
