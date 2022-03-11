import React, { useMemo } from 'react';
import {
  Area,
  AreaChart,
  CartesianAxis,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { incomes } from '../data/incomes';

export const ThisMonthGraph = () => {
  const thisMonthIncome = useMemo(() => {
    const currentMonth = new Date().getMonth();
    return incomes
      .map((income) => ({ ...income, date: new Date(income.date) }))
      .filter((income) => income.date.getMonth() === currentMonth);
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
        <CartesianAxis />
        <XAxis dataKey="date" />
        <YAxis dataKey="amount" unit="$" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
