import React, { useMemo } from 'react';
import {
  Area,
  AreaChart,
  CartesianAxis,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { incomes } from '../data/incomes';

export const CompareGraph = () => {
  const thisMonthIncome = useMemo(() => {
    const currentMonth = new Date().getMonth();
    return incomes
      .map((income) => ({ ...income, date: new Date(income.date) }))
      .filter((income) => income.date.getMonth() === currentMonth);
  }, []);
  const prevMonthIncome = useMemo(() => {
    const prevMonth = new Date().getMonth() - 1;
    return incomes
      .map((income) => ({ ...income, date: new Date(income.date) }))
      .filter((income) => income.date.getMonth() === prevMonth);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <Area
          data={thisMonthIncome}
          type="linear"
          dataKey="amount"
          stroke="#009da9"
          fill="#73ecff"
          fillOpacity={0.5}
        />
        <Area
          data={prevMonthIncome}
          type="linear"
          dataKey="amount"
          stroke="#009da9"
          fill="#009da9"
          fillOpacity={0.5}
        />
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis dataKey="amount" unit="$" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
