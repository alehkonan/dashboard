/**
 * this function converts coint to dollars
 * @param {number} amount this is the amount of coins to format
 */

export const formatMoney = (amount) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    parseInt(amount, 10) / 100
  );
