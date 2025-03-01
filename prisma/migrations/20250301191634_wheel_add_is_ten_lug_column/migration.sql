-- AlterTable
ALTER TABLE "Media" ALTER COLUMN "is_thumbnail" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Wheel" ADD COLUMN     "is_ten_lug" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "delivery_available" SET DEFAULT false,
ALTER COLUMN "free_on_site_pickup" SET DEFAULT false,
ALTER COLUMN "is_four_lug" SET DEFAULT false,
ALTER COLUMN "is_five_lug" SET DEFAULT false,
ALTER COLUMN "is_six_lug" SET DEFAULT false,
ALTER COLUMN "is_eight_lug" SET DEFAULT false,
ALTER COLUMN "is_central_lug" SET DEFAULT false,
ALTER COLUMN "is_three_lug" SET DEFAULT false;
