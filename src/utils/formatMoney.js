/**
 * this function converts coint to dollars
 * @param {number} amount this is the amount of coins to format
 */

export const formatMoney = (amount = 0) => {
  const amountNumber = parseInt(amount, 10) || 0;

  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  if (amountNumber % 100 === 0) options.minimumFractionDigits = 0;

  return new Intl.NumberFormat('en-US', options).format(amountNumber / 100);
};
