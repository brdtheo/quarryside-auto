/*
  Warnings:

  - Added the required column `is_central_lug` to the `Wheel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_three_lug` to the `Wheel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "WheelBrand" ADD VALUE 'UTR';

-- AlterTable
ALTER TABLE "Wheel" ADD COLUMN     "is_central_lug" BOOLEAN NOT NULL,
ADD COLUMN     "is_three_lug" BOOLEAN NOT NULL;
