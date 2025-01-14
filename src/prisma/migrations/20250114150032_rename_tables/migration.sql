/*
  Warnings:

  - You are about to drop the `medias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vehicles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vehicles_wheels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wheels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "medias" DROP CONSTRAINT "fk_vehicle";

-- DropForeignKey
ALTER TABLE "medias" DROP CONSTRAINT "fk_wheel";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT " fk_vehicle";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "fk_wheel";

-- DropForeignKey
ALTER TABLE "vehicles_wheels" DROP CONSTRAINT "fk_vehicle";

-- DropForeignKey
ALTER TABLE "vehicles_wheels" DROP CONSTRAINT "fk_wheel";

-- DropTable
DROP TABLE "medias";

-- DropTable
DROP TABLE "reviews";

-- DropTable
DROP TABLE "vehicles";

-- DropTable
DROP TABLE "vehicles_wheels";

-- DropTable
DROP TABLE "wheels";

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "vehicle" SMALLINT,
    "wheel" SMALLINT,
    "url" VARCHAR,
    "is_thumbnail" BOOLEAN NOT NULL,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "vehicle" SMALLINT,
    "wheel" SMALLINT,
    "title" VARCHAR(128),
    "description" VARCHAR,
    "rating" DECIMAL,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "thumbnail_url" VARCHAR,
    "model" VARCHAR NOT NULL,
    "mileage" INTEGER,
    "price_cts" BIGINT,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "year" SMALLINT,
    "description" VARCHAR,
    "brand" "VehicleBrand",
    "country" "VehicleCountry",
    "body_style" "VehicleBodyStyle",
    "weight_lbs" INTEGER,
    "power_bhp" INTEGER,
    "zero_to_sixty_seconds" DECIMAL,
    "top_speed_mph" SMALLINT,
    "fuel_type" "VehicleFuelType",
    "drivetrain" "VehicleDrivetrain",
    "transmission" "VehicleTransmission",
    "condition" "VehicleCondition",

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles_Wheels" (
    "id" SERIAL NOT NULL,
    "wheel_id" INTEGER NOT NULL,
    "vehicle_id" INTEGER NOT NULL,

    CONSTRAINT "Vehicles_Wheels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wheel" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "thumbnail_url" VARCHAR,
    "brand" "WheelBrand",
    "model" VARCHAR(128),
    "price_cts" BIGINT,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "delivery_available" BOOLEAN NOT NULL,
    "free_on_site_pickup" BOOLEAN NOT NULL,
    "sizes" VARCHAR[],
    "tires" VARCHAR[],
    "consumption" "WheelConsumption",
    "is_four_lug" BOOLEAN NOT NULL,
    "is_five_lug" BOOLEAN NOT NULL,
    "is_six_lug" BOOLEAN NOT NULL,
    "is_eight_lug" BOOLEAN NOT NULL,

    CONSTRAINT "Wheel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_slug_key" ON "Vehicle"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Wheel_slug_key" ON "Wheel"("slug");

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "fk_vehicle" FOREIGN KEY ("vehicle") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "fk_wheel" FOREIGN KEY ("wheel") REFERENCES "Wheel"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT " fk_vehicle" FOREIGN KEY ("vehicle") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "fk_wheel" FOREIGN KEY ("wheel") REFERENCES "Wheel"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Vehicles_Wheels" ADD CONSTRAINT "fk_vehicle" FOREIGN KEY ("vehicle_id") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Vehicles_Wheels" ADD CONSTRAINT "fk_wheel" FOREIGN KEY ("wheel_id") REFERENCES "Wheel"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
