-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "VehicleBodyStyle" ADD VALUE 'AMBULANCE';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'ATV';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'BOX_TRUCK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'BUGGY';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'BUS';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'CHASSIC_CAB';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'COUPE';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'DUMP_TRUCK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'FIFTH_WHEEL_TRUCK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'FLATBED';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'FLATBED_TRUCK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'HATCHBACK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'JATO_TRUCK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'LIFTBACK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'LOGGING_TRUCK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'MINIVAN';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'MIXER_TRUCK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'ROADSTER';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'SEDAN';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'SHOOTING_BRAKE';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'SUV';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'TANKER_TRUCK';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'VAN';
ALTER TYPE "VehicleBodyStyle" ADD VALUE 'WAGON';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "VehicleDrivetrain" ADD VALUE '8x8';
ALTER TYPE "VehicleDrivetrain" ADD VALUE '8x4';
ALTER TYPE "VehicleDrivetrain" ADD VALUE '8x6';
ALTER TYPE "VehicleDrivetrain" ADD VALUE '5x2';
ALTER TYPE "VehicleDrivetrain" ADD VALUE '4x4';
ALTER TYPE "VehicleDrivetrain" ADD VALUE '6x4';
ALTER TYPE "VehicleDrivetrain" ADD VALUE '6x6';
ALTER TYPE "VehicleDrivetrain" ADD VALUE '6x2';
ALTER TYPE "VehicleDrivetrain" ADD VALUE '3x3';

-- AlterEnum
ALTER TYPE "VehicleFuelType" ADD VALUE 'BATTERY';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "VehicleTransmission" ADD VALUE 'CVT';
ALTER TYPE "VehicleTransmission" ADD VALUE 'OTHER';
