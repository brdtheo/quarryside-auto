import { WheelBrand } from "@prisma/client";

export default {
  wheels: {
    meta: {
      title: "Колеса BeamNG для продажи - Quarryside Auto",
      description:
        "Откройте для себя наш выбор колес BeamNG среди различных дисков и шин для вашего автомобиля в Quarryside Auto. Quarryside Auto - это вымышленный дилерский сайт во вселенной BeamNG.drive.",
    },
    title: "Обода и шины",
    availability: "Доступность",
    availableOn: "Доступно на",
    addToCart: "Добавить в корзину",
    assemblyWithoutAppointment: "Сбор без предварительной записи",
    details: {
      meta: {
        title: "{ wheel } - Quarryside Auto",
        description:
          "Проверьте доступные размеры, шины и сопутствующие автомобили для { wheel } на Quarryside Auto",
      },
      specifications: "Технические характеристики",
      availableSizes: {
        title: "Доступные размеры",
      },
      availableTires: {
        title: "Доступные шины",
      },
      consumption: {
        title: "Потребление",
      },
    },
    filter: {
      brand: {
        title: "марка автомобиля",
        option: {
          [WheelBrand.ALDER]: "Alder",
          [WheelBrand.AUTOBELLO]: "Autobello",
          [WheelBrand.BETA]: "Beta",
          [WheelBrand.BRUCKELL]: "Bruckell",
          [WheelBrand.CHERRIER]: "Cherrier",
          [WheelBrand.CIVETTA]: "Civetta",
          [WheelBrand.CLOCKWISE]: "Clockwise",
          [WheelBrand.DREID]: "Dreid",
          [WheelBrand.ETK]: "ETK",
          [WheelBrand.FOLK]: "Folk",
          [WheelBrand.GAVRIL]: "Gavril",
          [WheelBrand.GP]: "GP",
          [WheelBrand.GRIP_ALL]: "Grip-All",
          [WheelBrand.HIROSHI]: "Hiroshi",
          [WheelBrand.IBISHU]: "Ibishu",
          [WheelBrand.LEGNO]: "Legno",
          [WheelBrand.NO_BRAND]: "N/A",
          [WheelBrand.OKUDAI]: "Okudai",
          [WheelBrand.SOLIAD]: "Soliad",
          [WheelBrand.SP]: "SP",
          [WheelBrand.STX]: "STX",
          [WheelBrand.TIMS]: "TIMS",
          [WheelBrand.TRIAL]: "Trial",
          [WheelBrand.UTR]: "UTR",
          [WheelBrand.WANGAN]: "Wangan",
        },
      },
      is_three_lug: {
        option: { true: "3 наконечник" },
      },
      is_four_lug: {
        option: { true: "4 наконечник" },
      },
      is_five_lug: {
        option: { true: "5 наконечник" },
      },
      is_six_lug: {
        option: { true: "6 наконечник" },
      },
      is_eight_lug: {
        option: { true: "8 наконечник" },
      },
      is_ten_lug: {
        option: { true: "10 наконечник" },
      },
      is_central_lug: {
        option: { true: "центральный наконечник" },
      },
      delivery_available: {
        title: "Доставка",
        option: {
          true: "Доступно для доставки",
        },
      },
      free_on_site_pickup: {
        title: "Выезд на место",
        option: {
          true: "Бесплатный самовывоз на месте",
        },
      },
    },
  },
};
