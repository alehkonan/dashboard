import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import parseISO from 'date-fns/parseISO';
import sub from 'date-fns/sub';
import isEqual from 'date-fns/isEqual';
import getMonth from 'date-fns/getMonth';
import { calculateAmount } from '../../utils/calculateAmount';

const getCurrentMonthDaysArray = () => {
  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  return eachDayOfInterval({ start, end });
};

/**
 * This function calculates the amount of incomes of a certain day
 * @param {{ id: Number, date: Date, amount: number }[]} incomes all incomes
 * @param {Date} date certain day`s Date
 * @returns amount of money that you`ve got this day or null of there is no amount
 */
const getDayIncome = (incomes, date) => {
  const dayIncomes = incomes.filter((income) => {
    const incomeDate = income.date.substring(0, 10);
    return isEqual(date, parseISO(incomeDate));
  });
  return calculateAmount(dayIncomes) || null;
};

/**
 * This function calculate all incomes of the current month with amount to compare if compare month is passed
 * @param {{ id: Number, date: Date, amount: number }[]} incomes all incomes
 * @param {number | string} compareMonth number of the month that is used to compare with
 * @returns Array of incomes of the current month
 */
export const getMonthIncome = (incomes, compareMonth) => {
  const currMonth = getMonth(new Date());
  const monthDiff = currMonth - parseInt(compareMonth);
  const datesArray = getCurrentMonthDaysArray();
  return datesArray.map((date) => ({
    amount: getDayIncome(incomes, date),
    prevAmount: monthDiff
      ? getDayIncome(incomes, sub(date, { months: monthDiff }))
      : 0,
    date,
  }));
};
