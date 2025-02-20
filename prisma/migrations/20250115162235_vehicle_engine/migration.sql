-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "engine" TEXT;

-- RenameForeignKey
ALTER TABLE "Review" RENAME CONSTRAINT " fk_vehicle" TO "fk_vehicle";
