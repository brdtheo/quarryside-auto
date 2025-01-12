/**
 * Returns a vehicle slug from its properties
 * @returns {string}
 */
export const getVehicleSlug = ({
  year,
  brand,
  model,
}: {
  year: string;
  brand: string;
  model: string;
}) => {
  const vehicleSlug = [year, brand, model]
    .join(" ")
    .toLowerCase()
    .replace(/\s/g, "-");
  return vehicleSlug;
};

/**
 * Returns a vehicle title from its slug
 * @returns {string}
 */
export const getVehicleTitle = (slug: string) => {
  const slugArray = slug.split("-");
  return slugArray.join(" ").toUpperCase();
};
