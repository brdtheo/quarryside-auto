import {
  VehicleBodyStyle,
  VehicleBrand,
  VehicleCondition,
  VehicleCountry,
  VehicleDrivetrain,
  VehicleFuelType,
  VehicleTransmission,
} from "@prisma/client";

export default {
  vehicles: {
    meta: {
      title: "BeamNG vehicles for sale - Quarryside Auto",
      description:
        "Discover our wide range of BeamNG vehicles for sale at Quarryside Auto. Find your next dream car now and contact us for a test drive. Quarryside Auto is a fictional dealership website set in the BeamNG.drive universe.",
    },
    title: "Used vehicles",
    wheels: "Wheels",
    checkAvailability: "Check availability",
    scheduleTestDrive: "Schedule test drive",
    noVehiclesFound: "No vehicles found",
    details: {
      meta: {
        title: "{ vehicle } - Quarryside Auto",
        description:
          "{ description }. Check out vehicle specifications and related wheels on Quarryside Auto",
      },
      specifications: "Specifications",
      performance: "Performance",
      estimate: "Est.",
      perMonth: "/month",
      year: {
        title: "Year",
      },
      engine: {
        title: "Engine",
        value:
          "{engineDisplacementVolumeLiters}L {engineLayout}{engineCylinderCount}",
      },
      power: {
        title: "Power",
        value: "{ power } bhp",
      },
      mileage: {
        title: "Mileage",
        value: "{ mileage } miles",
      },
      zeroToSixty: {
        title: "0 to 60mph",
        value: "{ seconds }s",
      },
      weight: {
        title: "Weight",
        value: "{ weight } lbs",
      },
      topSpeed: {
        title: "Top speed",
        value: "{ speed } mph",
      },
    },
    form: {
      title: "Interested? Your new vehicle awaits you",
      field: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone",
        message: "Message",
      },
    },
    filter: {
      condition: {
        title: "Condition",
        option: {
          [VehicleCondition.JUNKYARD]: "Junkyard",
          [VehicleCondition.USED]: "Used",
        },
      },
      brand: {
        title: "Brand",
        option: {
          [VehicleBrand.AUTOBELLO]: "Autobello",
          [VehicleBrand.BRUCKELL]: "Bruckell",
          [VehicleBrand.BURNSIDE]: "Burnside",
          [VehicleBrand.CHERRIER]: "Cherrier",
          [VehicleBrand.CIVETTA]: "Civetta",
          [VehicleBrand.ETK]: "ETK",
          [VehicleBrand.FPU]: "FPU",
          [VehicleBrand.GAVRIL]: "Gavril",
          [VehicleBrand.HIROSHI]: "Hiroshi",
          [VehicleBrand.IBISHU]: "Ibishu",
          [VehicleBrand.SOLIAD]: "Soliad",
          [VehicleBrand.SP]: "SP",
          [VehicleBrand.WENTWARD]: "Wentward",
        },
      },
      body_style: {
        title: "Body Style",
        option: {
          [VehicleBodyStyle.AMBULANCE]: "Ambulance",
          [VehicleBodyStyle.ATV]: "ATV",
          [VehicleBodyStyle.BOX_TRUCK]: "Box Truck",
          [VehicleBodyStyle.BUGGY]: "Buggy",
          [VehicleBodyStyle.BUS]: "Bus",
          [VehicleBodyStyle.CHASSIC_CAB]: "Chassis Cab",
          [VehicleBodyStyle.COUPE]: "Coupe",
          [VehicleBodyStyle.DUMP_TRUCK]: "Dump Truck",
          [VehicleBodyStyle.FIFTH_WHEEL_TRUCK]: "Fifth Wheel Truck",
          [VehicleBodyStyle.FLATBED]: "Flatbed",
          [VehicleBodyStyle.FLATBED_TRUCK]: "Flatbed truck",
          [VehicleBodyStyle.HATCHBACK]: "Hatchback",
          [VehicleBodyStyle.JATO_TRUCK]: "JATO Truck",
          [VehicleBodyStyle.LIFTBACK]: "Liftback",
          [VehicleBodyStyle.LOGGING_TRUCK]: "Logging Truck",
          [VehicleBodyStyle.MINIVAN]: "Minivan",
          [VehicleBodyStyle.MIXER_TRUCK]: "Mixer Truck",
          [VehicleBodyStyle.PICKUP]: "Pickup",
          [VehicleBodyStyle.ROADSTER]: "Roadster",
          [VehicleBodyStyle.SEDAN]: "Sedan",
          [VehicleBodyStyle.SHOOTING_BRAKE]: "Shooting Brake",
          [VehicleBodyStyle.SUV]: "SUV",
          [VehicleBodyStyle.TANKER_TRUCK]: "Tanker Truck",
          [VehicleBodyStyle.VAN]: "Van",
          [VehicleBodyStyle.WAGON]: "Wagon",
        },
      },
      fuel_type: {
        title: "Fuel Type",
        option: {
          [VehicleFuelType.BATTERY]: "Battery",
          [VehicleFuelType.DIESEL]: "Diesel",
          [VehicleFuelType.GASOLINE]: "Gasoline",
        },
      },
      engine_cylinder_count: {
        title: "Cylinders",
        option: {
          3: "3 cylinders",
          4: "4 cylinders",
          5: "5 cylinders",
          6: "6 cylinders",
          8: "8 cylinders",
          10: "10 cylinders",
        },
      },
      transmission: {
        title: "Transmission",
        option: {
          [VehicleTransmission.AUTOMATIC]: "Automatic",
          [VehicleTransmission.CVT]: "CVT",
          [VehicleTransmission.DCT]: "DCT",
          [VehicleTransmission.MANUAL]: "Manual",
          [VehicleTransmission.OTHER]: "Other",
          [VehicleTransmission.SEQUENTIAL]: "Sequential",
        },
      },
      drivetrain: {
        title: "Drivetrain",
        option: {
          [VehicleDrivetrain.AWD]: "AWD",
          [VehicleDrivetrain.EIGHT_BY_EIGHT]: "8x8",
          [VehicleDrivetrain.EIGHT_BY_FOUR]: "8x4",
          [VehicleDrivetrain.EIGHT_BY_SIX]: "8x6",
          [VehicleDrivetrain.FIVE_BY_TWO]: "5x2",
          [VehicleDrivetrain.FOURWD]: "4WD",
          [VehicleDrivetrain.FOUR_BY_FOUR]: "4x4",
          [VehicleDrivetrain.FWD]: "FWD",
          [VehicleDrivetrain.RWD]: "RWD",
          [VehicleDrivetrain.SIX_BY_FOUR]: "6x4",
          [VehicleDrivetrain.SIX_BY_SIX]: "6x6",
          [VehicleDrivetrain.SIX_BY_TWO]: "6x2",
          [VehicleDrivetrain.THREE_BY_THREE]: "3x3",
        },
      },
      country: {
        title: "Country",
        option: {
          [VehicleCountry.FRANCE]: "France",
          [VehicleCountry.GERMANY]: "Germany",
          [VehicleCountry.ITALY]: "Italy",
          [VehicleCountry.JAPAN]: "Japan",
          [VehicleCountry.POLAND]: "Poland",
          [VehicleCountry.USA]: "USA",
        },
      },
    },
  },
};
