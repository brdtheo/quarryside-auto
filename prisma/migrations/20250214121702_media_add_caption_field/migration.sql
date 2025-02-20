/*
  Warnings:

  - Added the required column `caption` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Made the column `url` on table `Media` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "caption" VARCHAR(128) NOT NULL,
ALTER COLUMN "url" SET NOT NULL;
