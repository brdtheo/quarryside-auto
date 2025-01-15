/*
  Warnings:

  - You are about to drop the column `engine` on the `Vehicle` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "VehicleEngineLayout" AS ENUM ('L', 'F', 'V', 'W');

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "engine",
ADD COLUMN     "engine_cylinder_count" INTEGER,
ADD COLUMN     "engine_displacement_volume_liters" DECIMAL(65,30),
ADD COLUMN     "engine_layout" "VehicleEngineLayout";
