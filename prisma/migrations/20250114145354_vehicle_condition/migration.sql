-- CreateEnum
CREATE TYPE "VehicleCondition" AS ENUM ('USED', 'JUNKYARD');

-- AlterTable
ALTER TABLE "vehicles" ADD COLUMN     "condition" "VehicleCondition";
