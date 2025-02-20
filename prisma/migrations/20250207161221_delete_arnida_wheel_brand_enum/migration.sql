/*
  Warnings:

  - The values [ARNIDA] on the enum `WheelBrand` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "WheelBrand_new" AS ENUM ('ALDER', 'AUTOBELLO', 'BETA', 'BRUCKELL', 'CHERRIER', 'CIVETTA', 'CLOCKWISE', 'DREID', 'ETK', 'FOLK', 'GAVRIL', 'GP', 'GRIP_ALL', 'HIROSHI', 'IBISHU', 'LEGNO', 'NO_BRAND', 'OKUDAI', 'SOLIAD', 'SP', 'STX', 'TIMS', 'TRIAL', 'WANGAN', 'UTR');
ALTER TABLE "Wheel" ALTER COLUMN "brand" TYPE "WheelBrand_new" USING ("brand"::text::"WheelBrand_new");
ALTER TYPE "WheelBrand" RENAME TO "WheelBrand_old";
ALTER TYPE "WheelBrand_new" RENAME TO "WheelBrand";
DROP TYPE "WheelBrand_old";
COMMIT;
