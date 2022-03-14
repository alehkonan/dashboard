import React, { useMemo } from 'react';
import {
  Area,
  AreaChart,
  CartesianAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { incomes } from '../../data/incomes';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import getDate from 'date-fns/getDate';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { formatMoney } from '../../utils/formatMoney';

export const ThisMonthGraph = () => {
  const thisMonthIncome = useMemo(() => {
    const today = new Date();
    const start = startOfMonth(today);
    const end = endOfMonth(today);
    const eachDay = eachDayOfInterval({ start, end });
    return eachDay.map((date) => {
      const dayWithIncome = incomes.find((income) => {
        return getDate(parseISO(income.date)) === getDate(date);
      });
      if (dayWithIncome) {
        return {
          amount: dayWithIncome.amount,
          date,
        };
      }
      return {
        amount: null,
        date,
      };
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <defs>
          <linearGradient
            color="#73ecff"
            id="areaColor"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity={0.05} />
            <stop offset="5%" stopColor="currentColor" stopOpacity={0.95} />
          </linearGradient>
        </defs>
        <Area
          data={thisMonthIncome}
          type="linear"
          dataKey="amount"
          stroke="#009da9"
          fill="url(#areaColor)"
          fillOpacity={0.5}
          connectNulls
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(date) => format(date, 'M/d')}
        />
        <YAxis
          dataKey="amount"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          tickFormatter={(amount) => formatMoney(amount)}
        />
        <CartesianGrid opacity={0.1} horizontal={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
