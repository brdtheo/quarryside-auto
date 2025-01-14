import type { ListFilterAsideSectionProps } from "@/components/ListFilterAsideSection";

import { Wheel, WheelBrand } from "@prisma/client";

/**
 * TEMP - FAKE DATA
 */
export const WHEEL_LIST_FILTER_SECTION: ListFilterAsideSectionProps[] = [
  {
    title: "Lug number",
    options: [
      { label: "4 lug", value: "is_four_lug", isChecked: true },
      { label: "5 lug", value: "is_five_lug", isChecked: true },
      { label: "6 lug", value: "is_six_lug", isChecked: false },
      { label: "8 lug", value: "is_eight_lug", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
  {
    title: "Brand",
    options: Object.values(WheelBrand).map((brand) => ({
      label: brand,
      value: brand.toLowerCase(),
      isChecked: false,
    })),
    isSearchable: true,
    onChange: () => {},
  },
  {
    title: "Delivery",
    options: [
      {
        label: "Available for delivery",
        value: "delivery_available",
        isChecked: false,
      },
      {
        label: "Free on site pickup",
        value: "free_onsite_pickup",
        isChecked: false,
      },
    ],
    isSearchable: false,
    onChange: () => {},
  },
  {
    title: "Reviews",
    options: [
      {
        label: "Products with reviews only",
        value: "average_rating",
        isChecked: false,
      },
    ],
    isSearchable: false,
    onChange: () => {},
  },
];

export const WHEEL_LIST: Wheel[] = [
  {
    brand: WheelBrand.IBISHU,
    consumption: "D",
    delivery_available: false,
    free_on_site_pickup: false,
    id: 1,
    model: "Type-F",
    price_cts: BigInt(24999),
    sizes: [
      "245/35R18 sport tire",
      "245/40R18 standard tire",
      "245/40R18 sport tire",
      "245/40R18 race tire",
      "245/40R18 tarmac rally tire",
    ],
    slug: "ibishu-type-f",
    thumbnail_url:
      "https://www.beamng-wheels.org/_next/image?url=https%3A%2F%2Fdiyponmokjdkfdsflogb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fwheels%2Ffour-lug%2F14_5.5__ibishu_type_f_front_wheel.webp&w=256&q=75",
    tires: [],
    is_four_lug: false,
    is_five_lug: false,
    is_six_lug: false,
    is_eight_lug: false,
    date_created: null,
  },
  {
    brand: WheelBrand.IBISHU,
    consumption: "D",
    delivery_available: false,
    free_on_site_pickup: false,
    id: 2,
    model: "Type-F",
    price_cts: BigInt(24999),
    sizes: [
      "245/35R18 sport tire",
      "245/40R18 standard tire",
      "245/40R18 sport tire",
      "245/40R18 race tire",
      "245/40R18 tarmac rally tire",
    ],
    slug: "ibishu-type-f",
    thumbnail_url:
      "https://www.beamng-wheels.org/_next/image?url=https%3A%2F%2Fdiyponmokjdkfdsflogb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fwheels%2Ffour-lug%2F14_5.5__ibishu_type_f_front_wheel.webp&w=256&q=75",
    tires: [],
    is_four_lug: false,
    is_five_lug: false,
    is_six_lug: false,
    is_eight_lug: false,
    date_created: null,
  },
  {
    brand: WheelBrand.IBISHU,
    consumption: "D",
    delivery_available: false,
    free_on_site_pickup: false,
    id: 3,
    model: "Type-F",
    price_cts: BigInt(24999),
    sizes: [
      "245/35R18 sport tire",
      "245/40R18 standard tire",
      "245/40R18 sport tire",
      "245/40R18 race tire",
      "245/40R18 tarmac rally tire",
    ],
    slug: "ibishu-type-f",
    thumbnail_url:
      "https://www.beamng-wheels.org/_next/image?url=https%3A%2F%2Fdiyponmokjdkfdsflogb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fwheels%2Ffour-lug%2F14_5.5__ibishu_type_f_front_wheel.webp&w=256&q=75",
    tires: [],
    is_four_lug: false,
    is_five_lug: false,
    is_six_lug: false,
    is_eight_lug: false,
    date_created: null,
  },
];
