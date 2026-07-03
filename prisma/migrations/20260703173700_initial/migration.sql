-- CreateTable
CREATE TABLE "Media" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicle" INTEGER,
    "wheel" INTEGER,
    "url" TEXT NOT NULL,
    "is_thumbnail" BOOLEAN NOT NULL DEFAULT false,
    "date_created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Media_vehicle_fkey" FOREIGN KEY ("vehicle") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Media_wheel_fkey" FOREIGN KEY ("wheel") REFERENCES "Wheel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicle" INTEGER,
    "wheel" INTEGER,
    "title" TEXT,
    "description" TEXT,
    "rating" DECIMAL,
    "date_created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_vehicle_fkey" FOREIGN KEY ("vehicle") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_wheel_fkey" FOREIGN KEY ("wheel") REFERENCES "Wheel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "thumbnail_url" TEXT,
    "model" TEXT NOT NULL,
    "mileage" INTEGER,
    "price_cts" BIGINT,
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

-- CreateTable
CREATE TABLE "Vehicles_Wheels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wheel_id" INTEGER NOT NULL,
    "vehicle_id" INTEGER NOT NULL,
    CONSTRAINT "Vehicles_Wheels_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Vehicles_Wheels_wheel_id_fkey" FOREIGN KEY ("wheel_id") REFERENCES "Wheel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Wheel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "thumbnail_url" TEXT,
    "brand" TEXT,
    "model" TEXT,
    "price_cts" BIGINT,
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

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_slug_key" ON "Vehicle"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_Wheels_vehicle_id_wheel_id_key" ON "Vehicles_Wheels"("vehicle_id", "wheel_id");

-- CreateIndex
CREATE UNIQUE INDEX "Wheel_slug_key" ON "Wheel"("slug");
