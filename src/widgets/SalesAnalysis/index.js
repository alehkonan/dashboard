import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Widget } from '../../layout/Widget';
import { Button } from '../../shared/ui/Button';
import { DatePicker } from '../../shared/ui/DatePicker';
import { InfoLabel } from '../../shared/ui/InfoLabel';
import { RadioGroup } from '../../shared/ui/RadioGroup';
import { Select } from '../../shared/ui/Select';
import { BestHoursGraph } from '../BestHoursGraph';
import { CompareGraph } from '../CompareGraph';
import { ThisMonthGraph } from '../ThisMonthGraph';

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
              !filter || filter === 'this_month' ? 'border-primary' : ''
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
        {(!filter || filter === 'this_month') && <ThisMonthGraph />}
        {filter === 'compare' && <CompareGraph />}
        {filter === 'best_hours' && <BestHoursGraph />}
      </div>
    </Widget>
  );
};
