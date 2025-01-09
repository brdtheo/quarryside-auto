/**
 * Returns a car slug from its properties
 * @returns {string}
 */
export const getCarSlug = ({
  year,
  brand,
  model,
}: {
  year: string;
  brand: string;
  model: string;
}) => {
  const carSlug = [year, brand, model]
    .join(" ")
    .toLowerCase()
    .replace(/\s/g, "-");
  return carSlug;
};

/**
 * Returns a car title from its slug
 * @returns {string}
 */
export const getCarTitle = (slug: string) => {
  const slugArray = slug.split("-");
  return slugArray.join(" ").toUpperCase();
};
