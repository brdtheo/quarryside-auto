/*
  Warnings:

  - You are about to alter the column `price_cts` on the `Vehicle` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `price_cts` on the `Wheel` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "thumbnail_url" TEXT,
    "model" TEXT NOT NULL,
    "mileage" INTEGER,
    "price_cts" INTEGER,
    "date_created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "year" INTEGER,
    "description" TEXT,
    "brand" TEXT,
    "country" TEXT,
    "body_style" TEXT,
    "weight_lbs" INTEGER,
    "power_bhp" INTEGER,
    "zero_to_sixty_seconds" DECIMAL,
    "top_speed_mph" INTEGER,
    "fuel_type" TEXT,
    "drivetrain" TEXT,
    "transmission" TEXT,
    "condition" TEXT,
    "engine_cylinder_count" INTEGER,
    "engine_displacement_volume_liters" DECIMAL,
    "engine_layout" TEXT
);
INSERT INTO "new_Vehicle" ("body_style", "brand", "condition", "country", "date_created", "description", "drivetrain", "engine_cylinder_count", "engine_displacement_volume_liters", "engine_layout", "fuel_type", "id", "mileage", "model", "power_bhp", "price_cts", "slug", "thumbnail_url", "top_speed_mph", "transmission", "weight_lbs", "year", "zero_to_sixty_seconds") SELECT "body_style", "brand", "condition", "country", "date_created", "description", "drivetrain", "engine_cylinder_count", "engine_displacement_volume_liters", "engine_layout", "fuel_type", "id", "mileage", "model", "power_bhp", "price_cts", "slug", "thumbnail_url", "top_speed_mph", "transmission", "weight_lbs", "year", "zero_to_sixty_seconds" FROM "Vehicle";
DROP TABLE "Vehicle";
ALTER TABLE "new_Vehicle" RENAME TO "Vehicle";
CREATE UNIQUE INDEX "Vehicle_slug_key" ON "Vehicle"("slug");
CREATE TABLE "new_Wheel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "thumbnail_url" TEXT,
    "brand" TEXT,
    "model" TEXT,
    "price_cts" INTEGER,
    "date_created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "delivery_available" BOOLEAN NOT NULL DEFAULT false,
    "free_on_site_pickup" BOOLEAN NOT NULL DEFAULT false,
    "sizes" JSONB NOT NULL,
    "tires" JSONB NOT NULL,
    "consumption" TEXT,
    "is_four_lug" BOOLEAN NOT NULL DEFAULT false,
    "is_five_lug" BOOLEAN NOT NULL DEFAULT false,
    "is_six_lug" BOOLEAN NOT NULL DEFAULT false,
    "is_eight_lug" BOOLEAN NOT NULL DEFAULT false,
    "is_central_lug" BOOLEAN NOT NULL DEFAULT false,
    "is_three_lug" BOOLEAN NOT NULL DEFAULT false,
    "is_ten_lug" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Wheel" ("brand", "consumption", "date_created", "delivery_available", "free_on_site_pickup", "id", "is_central_lug", "is_eight_lug", "is_five_lug", "is_four_lug", "is_six_lug", "is_ten_lug", "is_three_lug", "model", "price_cts", "sizes", "slug", "thumbnail_url", "tires") SELECT "brand", "consumption", "date_created", "delivery_available", "free_on_site_pickup", "id", "is_central_lug", "is_eight_lug", "is_five_lug", "is_four_lug", "is_six_lug", "is_ten_lug", "is_three_lug", "model", "price_cts", "sizes", "slug", "thumbnail_url", "tires" FROM "Wheel";
DROP TABLE "Wheel";
ALTER TABLE "new_Wheel" RENAME TO "Wheel";
CREATE UNIQUE INDEX "Wheel_slug_key" ON "Wheel"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
