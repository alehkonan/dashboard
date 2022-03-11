import React, { useMemo } from 'react';
import { incomes } from '../data/incomes';
import { Widget } from '../layout/Widget';
import { RadioGroup } from '../shared/ui/RadioGroup';
import { calculateAmount } from '../utils/calculateAmount';
import { PerformanceCard } from './PerformanceCard';

export const SalesPerformance = () => {
  const performance = useMemo(() => {
    const today = new Date();
    const detailedIncomes = incomes.map((income) => ({
      ...income,
      date: new Date(income.date),
    }));
    const todayIncome = detailedIncomes.filter(
      (income) =>
        income.date.getFullYear() === today.getFullYear() &&
        income.date.getMonth() === today.getMonth() &&
        income.date.getDate() === today.getDate()
    );
    const monthIncome = detailedIncomes.filter(
      (income) =>
        income.date.getFullYear() === today.getFullYear() &&
        income.date.getMonth() === today.getMonth()
    );
    const lastMonthIncome = detailedIncomes.filter(
      (income) =>
        income.date.getFullYear() === today.getFullYear() &&
        income.date.getMonth() === today.getMonth() - 1
    );
    const yearIncome = detailedIncomes.filter(
      (income) => income.date.getFullYear() === today.getFullYear()
    );
    return [
      {
        period: 'Today',
        amount: calculateAmount(todayIncome),
      },
      {
        period: 'This Week',
        amount: calculateAmount([]),
      },
      {
        period: 'This Month',
        amount: calculateAmount(monthIncome),
      },
      {
        period: 'Last Month',
        amount: calculateAmount(lastMonthIncome),
      },
      {
        period: 'This Year',
        amount: calculateAmount(yearIncome),
      },
    ];
  }, []);

  return (
    <Widget
      title="Salese Performance"
      inputs={
        <div className="flex items-center gap-3">
          <RadioGroup name="currency" options={['$', '%']} />
          <RadioGroup name="type" options={['Products', 'Venues']} />
        </div>
      }
    >
      <div className="grid grid-cols-5 gap-6">
        {performance.map(({ period, amount }) => (
          <PerformanceCard period={period} amount={amount} />
        ))}
      </div>
    </Widget>
  );
};
