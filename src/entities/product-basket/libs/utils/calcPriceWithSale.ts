export const calcPriceWithSale = (count: number, sale: number): number =>
  Math.round(count - (count / 100) * sale);
