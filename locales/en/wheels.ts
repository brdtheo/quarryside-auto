import { WheelBrand } from "@prisma/client";

export default {
  wheels: {
    title: "Rims & tires",
    availability: "Availability",
    availableOn: "Available on",
    addToCart: "Add to cart",
    assemblyWithoutAppointment: "Assembly without appointment",
    details: {
      specifications: "Specifications",
      availableSizes: {
        title: "Available sizes",
      },
      availableTires: {
        title: "Available tires",
      },
      consumption: {
        title: "Consumption",
      },
    },
    filter: {
      brand: {
        title: "Brand",
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
        option: { true: "3 lugs" },
      },
      is_four_lug: {
        option: { true: "4 lugs" },
      },
      is_five_lug: {
        option: { true: "5 lugs" },
      },
      is_six_lug: {
        option: { true: "6 lugs" },
      },
      is_eight_lug: {
        option: { true: "8 lugs" },
      },
      is_central_lug: {
        option: { true: "Central lug" },
      },
      delivery_available: {
        title: "Delivery",
        option: {
          true: "Available for delivery",
        },
      },
      free_on_site_pickup: {
        title: "On site pickup",
        option: {
          true: "Free on site pickup",
        },
      },
    },
  },
};
