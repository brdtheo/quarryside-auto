/**
 * TEMP - FAKE DATA
 */
import type { ListFilterAsideSectionProps } from "@/components/ListFilterAsideSection";

import { Media } from "@/media/types";

import { type Car, CarBrand } from "./types";

const yearFilterRange = [1980, 2024];

export enum CarCondition {
  USED = 1,
  JUNKYARD = 2,
}

export const CAR_LIST_FILTER_SECTION: ListFilterAsideSectionProps[] = [
  {
    title: "Condition",
    options: [
      { label: "Used", value: "used", isChecked: true },
      { label: "Junkyard", value: "junkyard", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
  {
    title: "Brand",
    options: Object.values(CarBrand).map((brand) => ({
      label: brand,
      value: brand.toLowerCase(),
      isChecked: false,
    })),
    isSearchable: true,
    onChange: () => {},
  },
  {
    title: "Cylinders",
    options: [
      { label: "4 cylinders", value: "4", isChecked: false },
      { label: "6 cylinders", value: "6", isChecked: false },
      { label: "8 cylinders", value: "8", isChecked: false },
      { label: "10 cylinders", value: "10", isChecked: false },
      { label: "12 cylinders", value: "12", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
  {
    title: "Transmission",
    options: [
      { label: "FWD", value: "FWD", isChecked: false },
      { label: "RWD", value: "RWD", isChecked: false },
      { label: "AWD", value: "AWD", isChecked: false },
      { label: "4WD", value: "4WD", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
  {
    title: "Year",
    options: Array.from(
      { length: yearFilterRange[1] - yearFilterRange[0] + 1 },
      (_, index) => {
        const year = yearFilterRange[0] + index;
        return {
          label: `${year}`,
          value: `${year}`,
          isChecked: false,
        };
      },
    ),

    isSearchable: true,
    onChange: () => {},
  },
  {
    title: "Features",
    options: [
      { label: "BeamNavigator", value: "beam-navigator", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
];

export const CAR_MEDIA_LIST: Media[] = [
  {
    id: 1,
    path: "https://www.beamng.com/attachments/screenshot_2025-01-05_21-45-45-png.1196988/",
    is_thumbnail: true,
    car_id: null,
    wheel_id: null,
  },
  {
    id: 2,
    path: "https://www.beamng.com/attachments/screenshot_2025-01-06_20-07-42-png.1196990/",
    is_thumbnail: false,
    car_id: null,
    wheel_id: null,
  },
  {
    id: 3,
    path: "https://www.beamng.com/attachments/screenshot_2025-01-06_20-23-55-png.1196993/",
    is_thumbnail: false,
    car_id: null,
    wheel_id: null,
  },
  {
    id: 4,
    path: "https://www.beamng.com/attachments/screenshot_2025-01-06_23-16-33-png.1196994/",
    is_thumbnail: false,
    car_id: null,
    wheel_id: null,
  },
];

export const CAR_LIST: Car[] = [
  {
    id: 1,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 2,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 3,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 4,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 5,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 6,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 7,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 8,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 9,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
  {
    id: 10,
    condition: CarCondition.USED,
    thumbnail_url:
      "https://preview.redd.it/i-need-a-new-daily-so-i-went-to-the-dealership-to-see-some-v0-yza8t3h9mbhb1.jpg?width=1920&format=pjpg&auto=webp&s=6c4d549f815c094ee15e9fbdd33c9716ba318f27",
    year: 2012,
    brand: CarBrand.ETK,
    model: "800 wagon",
    price_cts: 3299900,
    miles: 14245,
    average_rating: 4.5,
  },
];
