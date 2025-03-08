import { expect, test } from "vitest";

import { getHomeFindManyArgs } from "@/utils";

test("retrieves prisma find many args for home page", () => {
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
