export const BrandSelectArray = [
  "All",
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Kia",
  "Land",
];

export const PriceSelectArray = (() => {
  const max = 500;
  let priceArray = [];

  for (let i = 10; i <= max; i += 10) {
    priceArray.push(i);
  }
  return priceArray;
})();
