export const formatPrice = (value) => {
  const calPriceDecimal = Math.ceil(value * 100) / 100;
  return `${calPriceDecimal
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} THB/Day`;
};

export const formatPriceTHB = (value) => {
  const calPriceDecimal = Math.ceil(value * 100) / 100;
  return `${calPriceDecimal
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} THB`;
};
