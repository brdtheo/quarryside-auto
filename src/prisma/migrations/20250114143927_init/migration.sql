-- CreateEnum
CREATE TYPE "VehicleBrand" AS ENUM ('AUTOBELLO', 'BRUCKELL', 'BURNSIDE', 'CHERRIER', 'CIVETTA', 'ETK', 'FPU', 'GAVRIL', 'HIROSHI', 'IBISHU', 'SP', 'SOLIAD', 'WENTWARD');

-- CreateEnum
CREATE TYPE "VehicleCountry" AS ENUM ('USA', 'ITALY', 'FRANCE', 'GERMANY', 'POLAND', 'JAPAN');

-- CreateEnum
CREATE TYPE "VehicleFuelType" AS ENUM ('GASOLINE', 'DIESEL');

-- CreateEnum
CREATE TYPE "VehicleDrivetrain" AS ENUM ('RWD', 'FWD', 'AWD', '4WD');

-- CreateEnum
CREATE TYPE "VehicleTransmission" AS ENUM ('MANUAL', 'AUTOMATIC', 'SEQUENTIAL', 'DCT');

-- CreateEnum
CREATE TYPE "VehicleBodyStyle" AS ENUM ('PICKUP');

-- CreateEnum
CREATE TYPE "WheelBrand" AS ENUM ('ALDER', 'ARNIDA', 'AUTOBELLO', 'BETA', 'BRUCKELL', 'CHERRIER', 'CIVETTA', 'CLOCKWISE', 'DREID', 'ETK', 'FOLK', 'GAVRIL', 'GP', 'GRIP_ALL', 'HIROSHI', 'IBISHU', 'LEGNO', 'NO_BRAND', 'OKUDAI', 'SOLIAD', 'SP', 'STX', 'TIMS', 'TRIAL', 'WANGAN');

-- CreateEnum
CREATE TYPE "WheelConsumption" AS ENUM ('A', 'B', 'C', 'D', 'E', 'F', 'G');

-- CreateTable
CREATE TABLE "medias" (
    "id" SERIAL NOT NULL,
    "vehicle" SMALLINT,
    "wheel" SMALLINT,
    "url" VARCHAR,
    "is_thumbnail" BOOLEAN NOT NULL,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "vehicle" SMALLINT,
    "wheel" SMALLINT,
    "title" VARCHAR(128),
    "description" VARCHAR,
    "rating" DECIMAL,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
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

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles_wheels" (
    "id" SERIAL NOT NULL,
    "wheel_id" INTEGER NOT NULL,
    "vehicle_id" INTEGER NOT NULL,

    CONSTRAINT "vehicles_wheels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wheels" (
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

    CONSTRAINT "wheels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_slug_key" ON "vehicles"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "wheels_slug_key" ON "wheels"("slug");

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "fk_vehicle" FOREIGN KEY ("vehicle") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "fk_wheel" FOREIGN KEY ("wheel") REFERENCES "wheels"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT " fk_vehicle" FOREIGN KEY ("vehicle") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "fk_wheel" FOREIGN KEY ("wheel") REFERENCES "wheels"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicles_wheels" ADD CONSTRAINT "fk_vehicle" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicles_wheels" ADD CONSTRAINT "fk_wheel" FOREIGN KEY ("wheel_id") REFERENCES "wheels"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
