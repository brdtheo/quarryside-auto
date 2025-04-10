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
      title: "Автомобили BeamNG на продажу - Quarryside Auto",
      description:
        "Откройте для себя широкий выбор автомобилей BeamNG для продажи в Quarryside Auto. Найдите свой следующий автомобиль мечты прямо сейчас и свяжитесь с нами для тест-драйва. Quarryside Auto - это вымышленный дилерский сайт во вселенной BeamNG.drive.",
    },
    title: "Подержанные автомобили",
    wheels: "колеса",
    checkAvailability: "Проверить наличие",
    scheduleTestDrive: "Запланируйте тест-драйв",
    noVehiclesFound: "Автомобили не найдены",
    details: {
      meta: {
        title: "{ vehicle } - Quarryside Auto",
        description:
          "{ description }. Проверьте технические характеристики автомобиля и сопутствующие колеса на Quarryside Auto",
      },
      specifications: "Технические характеристики",
      performance: "Производительность",
      estimate: "оценка",
      perMonth: "/месяц",
      year: {
        title: "Год",
      },
      engine: {
        title: "Двигатель",
        value:
          "{engineDisplacementVolumeLiters}L {engineLayout}{engineCylinderCount}",
      },
      power: {
        title: "мощность двигателя",
        value: "{ power } bhp",
      },
      mileage: {
        title: "Пробег",
        value: "{ mileage } мили",
      },
      zeroToSixty: {
        title: "От 0 до 60 миль/ч",
        value: "{ seconds }s",
      },
      weight: {
        title: "Вес",
        value: "{ weight } lbs",
      },
      topSpeed: {
        title: "Максимальная скорость",
        value: "{ speed } mph",
      },
    },
    form: {
      title: "Заинтересованы? Ваш новый автомобиль ждет вас",
      field: {
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Электронная почта",
        phone: "трубка",
        message: "Сообщение",
      },
    },
    filter: {
      condition: {
        title: "состояние автомобиля",
        option: {
          [VehicleCondition.JUNKYARD]: "свалка",
          [VehicleCondition.USED]: "подержанный",
        },
      },
      brand: {
        title: "марка автомобилей",
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
        title: "тип автомобиля",
        option: {
          [VehicleBodyStyle.AMBULANCE]: "скорая помощь",
          [VehicleBodyStyle.ATV]: "ATV",
          [VehicleBodyStyle.BOX_TRUCK]: "грузовой автомобиль",
          [VehicleBodyStyle.BUGGY]: "багги",
          [VehicleBodyStyle.BUS]: "автобус",
          [VehicleBodyStyle.CHASSIC_CAB]: "шасси кабина",
          [VehicleBodyStyle.COUPE]: "купе",
          [VehicleBodyStyle.DUMP_TRUCK]: "самосвал",
          [VehicleBodyStyle.FIFTH_WHEEL_TRUCK]: "Грузовик с пятым колесом",
          [VehicleBodyStyle.FLATBED]: "бортовой",
          [VehicleBodyStyle.FLATBED_TRUCK]: "бортовой грузовик",
          [VehicleBodyStyle.HATCHBACK]: "Хэтчбек",
          [VehicleBodyStyle.JATO_TRUCK]: "JATO грузовик",
          [VehicleBodyStyle.LIFTBACK]: "Liftback",
          [VehicleBodyStyle.LOGGING_TRUCK]: "Лесовоз",
          [VehicleBodyStyle.MINIVAN]: "Минивэн",
          [VehicleBodyStyle.MIXER_TRUCK]: "Грузовик-миксер",
          [VehicleBodyStyle.PICKUP]: "Пикап",
          [VehicleBodyStyle.ROADSTER]: "Roadster",
          [VehicleBodyStyle.SEDAN]: "Седан",
          [VehicleBodyStyle.SHOOTING_BRAKE]: "Shooting Brake",
          [VehicleBodyStyle.SUV]: "Внедорожник",
          [VehicleBodyStyle.TANKER_TRUCK]: "Автоцистерна",
          [VehicleBodyStyle.VAN]: "фургон",
          [VehicleBodyStyle.WAGON]: "вагонный",
        },
      },
      fuel_type: {
        title: "тип топлива",
        option: {
          [VehicleFuelType.BATTERY]: "аккумулятор",
          [VehicleFuelType.DIESEL]: "дизельный",
          [VehicleFuelType.GASOLINE]: "бензин",
        },
      },
      engine_cylinder_count: {
        title: "цилиндр двигателя",
        option: "{ count } цилиндр",
      },
      transmission: {
        title: "трансмиссия",
        option: {
          [VehicleTransmission.AUTOMATIC]: "автоматическая трансмиссия",
          [VehicleTransmission.CVT]: "CVT",
          [VehicleTransmission.DCT]: "DCT",
          [VehicleTransmission.MANUAL]: "механическая трансмиссия",
          [VehicleTransmission.OTHER]: "иной",
          [VehicleTransmission.SEQUENTIAL]: "последовательный",
        },
      },
      drivetrain: {
        title: "ведущие колёса",
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
        title: "страна",
        option: {
          [VehicleCountry.FRANCE]: "Франция",
          [VehicleCountry.GERMANY]: "германия",
          [VehicleCountry.ITALY]: "Италия",
          [VehicleCountry.JAPAN]: "Япония",
          [VehicleCountry.POLAND]: "Польша",
          [VehicleCountry.USA]: "США",
        },
      },
    },
  },
};
