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

export const Graph = ({ data, currentDataColor, compareDataColor }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        margin={{ top: 10, right: 10, left: -30, bottom: 10 }}
        data={data}
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
            color={currentDataColor}
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
            color={compareDataColor}
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
          tickMargin={-50}
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
