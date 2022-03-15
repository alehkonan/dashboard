import React, { useMemo } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import format from 'date-fns/format';
import { formatMoney } from '../../utils/formatMoney';
import { useLocation } from 'react-router-dom';
import { incomes } from '../../data/incomes';
import { ANALYS_OPTIONS, ANALYS_QUERY, COMPARE_MONTH_QUERY } from './constants';
import { getMonthIncome } from './utils';
import { BestHoursGraph } from './BestHoursGraph';

export const Graph = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const analysQuery = searchParams.get(ANALYS_QUERY);
  const compareMonth = searchParams.get(COMPARE_MONTH_QUERY);

  const monthIncome = useMemo(
    () => getMonthIncome(incomes, compareMonth),
    [compareMonth]
  );

  if (analysQuery === ANALYS_OPTIONS.bestHours.query) {
    return <BestHoursGraph />;
  }

  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
        data={monthIncome}
      >
        <defs>
          <linearGradient
            color="#009da9"
            id="strokeColor"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity={0} />
            <stop offset="15%" stopColor="currentColor" stopOpacity={1} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            color="#73ecff"
            id="currentDataFillColor"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity={0} />
            <stop offset="15%" stopColor="currentColor" stopOpacity={1} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            color="#009da9"
            id="compareDataFillColor"
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
          type="linear"
          dataKey="amount"
          stroke="url(#strokeColor)"
          fill="url(#currentDataFillColor)"
          fillOpacity={0.5}
          connectNulls
        />
        <Area
          type="linear"
          dataKey="prevAmount"
          strokeWidth={0}
          stroke="url(#strokeColor)"
          fill="url(#compareDataFillColor)"
          fillOpacity={0.5}
          connectNulls
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(date) => format(date, 'M/d')}
          tickMargin={10}
        />
        <YAxis
          dataKey="amount"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          tickMargin={-20}
          tickFormatter={(amount) => formatMoney(amount)}
        />
        <CartesianGrid
          stroke="#fff"
          horizontal={false}
          transform="translate(30)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
