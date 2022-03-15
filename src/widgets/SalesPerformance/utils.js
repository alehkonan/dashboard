import parseISO from 'date-fns/parseISO';
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import isThisMonth from 'date-fns/isThisMonth';
import isThisYear from 'date-fns/isThisYear';
import getMonth from 'date-fns/getMonth';
import { calculateAmount } from '../../utils/calculateAmount';

/**
 * This function generates an array of periods with its income
 * @param {{ id: Number, date: Date, amount: number }[]} incomes all incomes
 * @returns Array of incomes by periods
 */
export const getIncomesByPeriods = (incomes) => {
  const today = incomes.filter(({ date }) => isToday(parseISO(date)));
  const thisWeek = incomes.filter(({ date }) => isThisWeek(parseISO(date)));
  const thisMonth = incomes.filter(({ date }) => isThisMonth(parseISO(date)));
  const lastMonth = incomes.filter(
    ({ date }) =>
      isThisYear(parseISO(date)) &&
      getMonth(parseISO(date)) === getMonth(new Date()) - 1
  );
  const thisYear = incomes.filter(({ date }) => isThisYear(parseISO(date)));

  return [
    {
      period: 'Today',
      amount: calculateAmount(today),
    },
    {
      period: 'This Week',
      amount: calculateAmount(thisWeek),
    },
    {
      period: 'This Month',
      amount: calculateAmount(thisMonth),
    },
    {
      period: 'Last Month',
      amount: calculateAmount(lastMonth),
    },
    {
      period: 'This Year',
      amount: calculateAmount(thisYear),
    },
  ];
};
