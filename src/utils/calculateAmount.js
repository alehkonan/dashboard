/**
 * this function calculate total amount of an array of incomes
 * @param {Array<{ amount: number, date: Date }>} incomes array of incomes
 * @returns number
 */
export const calculateAmount = (incomes) => {
  if (Array.isArray(incomes)) {
    return incomes.reduce((prev, acc) => prev + acc.amount, 0) || 0;
  }

  return 0;
};
