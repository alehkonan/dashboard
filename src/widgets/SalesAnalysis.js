import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CartesianGrid,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { incomeAnotherMonth, incomeOneMonth } from '../data/income';
import { Widget } from '../layout/Widget';
import { Button } from '../shared/ui/Button';
import { DatePicker } from '../shared/ui/DatePicker';
import { InfoLabel } from '../shared/ui/InfoLabel';
import { RadioGroup } from '../shared/ui/RadioGroup';
import { Select } from '../shared/ui/Select';

const Inputs = () => {
  return (
    <div className="flex gap-3">
      <Select
        options={[{ value: 'compareMonth', label: 'Compare Month Before' }]}
      />
      <Select options={[{ value: 'days', label: 'Show Days' }]} />
      <div className="flex">
        <DatePicker initDate={new Date()} />
        <DatePicker initDate={new Date()} />
      </div>
    </div>
  );
};

export const SalesAnalysis = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const filter = searchParams.get('filter');

  return (
    <Widget title="Sales Analysis" inputs={<Inputs />}>
      <div className="flex gap-2 justify-end mt-3">
        <InfoLabel text="Current" color="#009da9" />
        <InfoLabel text="Comparison" color="#007982" />
        <Button secondary>Reset</Button>
        <RadioGroup name="appearanceChoise" options={['$', '%']} />
        <RadioGroup name="serviceChoise" options={['Products', 'Venues']} />
      </div>
      <nav className="border-b-4 mt-[-20px]">
        <ul className="flex">
          <li
            className={`p-3 cursor-pointer border-b-4 mb-[-4px] ${
              filter === 'this_month' ? 'border-primary' : ''
            } uppercase`}
            onClick={() => navigate({ search: 'filter=this_month' })}
          >
            This Month
          </li>
          <li
            className={`p-3 cursor-pointer border-b-4 mb-[-4px] ${
              filter === 'compare' ? 'border-primary' : ''
            } uppercase`}
            onClick={() => navigate({ search: 'filter=compare' })}
          >
            Compare
          </li>
          <li
            className={`p-3 cursor-pointer border-b-4 mb-[-4px] ${
              filter === 'best_hours' ? 'border-primary' : ''
            } uppercase`}
            onClick={() => navigate({ search: 'filter=best_hours' })}
          >
            Best Hours
          </li>
        </ul>
      </nav>
      <div className="mt-3">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <Area
              data={incomeAnotherMonth}
              type="linear"
              dataKey="income"
              stroke="#009da9"
              fill="#73ecff"
              fillOpacity={0.5}
            />
            <Area
              data={incomeOneMonth}
              type="linear"
              dataKey="income"
              stroke="#009da9"
              fill="#009da9"
              fillOpacity={0.5}
            />
            <CartesianGrid />
            <XAxis dataKey="date" />
            <YAxis unit="$" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Widget>
  );
};
