import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Widget } from '../../layout/Widget';
import { Button } from '../../shared/ui/Button';
import { DatePicker } from '../../shared/ui/DatePicker';
import { InfoLabel } from '../../shared/ui/InfoLabel';
import { RadioGroup } from '../../shared/ui/RadioGroup';
import { Select } from '../../shared/ui/Select';
import { BestHoursGraph } from './BestHoursGraph';
import { CompareGraph } from './CompareGraph';
import { ThisMonthGraph } from './ThisMonthGraph';

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

const analysOptions = [
  {
    id: 1,
    label: 'This Month',
    value: 'this_month',
  },
  {
    id: 2,
    label: 'Compare',
    value: 'compare',
  },
  {
    id: 3,
    label: 'Best Hours',
    value: 'best_hours',
  },
];

export const SalesAnalysis = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const analys = searchParams.get('analys');

  return (
    <Widget title="Sales Analysis" inputs={<Inputs />}>
      <div className="flex gap-3 justify-end mt-3">
        <InfoLabel text="Current" color="#009da9" />
        <InfoLabel text="Comparison" color="#007982" />
        <Button secondary>Reset</Button>
        <RadioGroup name="appearanceChoise" options={['$', '%']} />
        <RadioGroup name="serviceChoise" options={['Products', 'Venues']} />
      </div>
      <nav className="border-b-4 mt-[-20px]">
        <ul className="flex">
          {analysOptions.map(({ id, label, value }, index) => (
            <li
              key={id}
              className={`p-3 cursor-pointer border-b-4 mb-[-4px] ${
                (!analys && index === 0) || analys === value
                  ? 'border-primary'
                  : ''
              } uppercase hover:bg-primary hover:bg-opacity-10 hover:border-primary`}
              onClick={() => navigate({ search: `analys=${value}` })}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-3">
        {(!analys || analys === 'this_month') && <ThisMonthGraph />}
        {analys === 'compare' && <CompareGraph />}
        {analys === 'best_hours' && <BestHoursGraph />}
      </div>
    </Widget>
  );
};
