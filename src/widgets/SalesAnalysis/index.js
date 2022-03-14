import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Widget } from '../../layout/Widget';
import { Button } from '../../shared/ui/Button';
import { DatePicker } from '../../shared/ui/DatePicker';
import { InfoLabel } from '../../shared/ui/InfoLabel';
import { RadioGroup } from '../../shared/ui/RadioGroup';
import { Select } from '../../shared/ui/Select';
import { BestHoursGraph } from './BestHoursGraph';
import { Graph } from './Graph';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import parseISO from 'date-fns/parseISO';
import add from 'date-fns/add';
import isEqual from 'date-fns/isEqual';
import { incomes } from '../../data/incomes';
import { calculateAmount } from '../../utils/calculateAmount';

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

  const thisMonthIncome = useMemo(() => {
    const today = new Date();
    const start = startOfMonth(today);
    const end = endOfMonth(today);
    const eachDay = eachDayOfInterval({ start, end });
    return eachDay.map((date) => {
      const monthIncome = incomes.filter((income) => {
        const incomeDate = income.date.substring(0, 10);
        return isEqual(date, parseISO(incomeDate));
      });
      return {
        amount: calculateAmount(monthIncome) || null,
        date,
      };
    });
  }, []);

  const thisWithPrevMonthIncome = useMemo(() => {
    const today = new Date();
    const start = startOfMonth(today);
    const end = endOfMonth(today);
    const eachDay = eachDayOfInterval({ start, end });
    return eachDay.map((date) => {
      const prevMonthIncome = incomes.filter((income) => {
        const incomeDate = income.date.substring(0, 10);
        return isEqual(date, add(parseISO(incomeDate), { months: 1 }));
      });
      const currMonthIncome = incomes.filter((income) => {
        const incomeDate = income.date.substring(0, 10);
        return isEqual(date, parseISO(incomeDate));
      });
      return {
        prevAmount: calculateAmount(prevMonthIncome) || null,
        amount: calculateAmount(currMonthIncome) || null,
        date,
      };
    });
  }, []);

  return (
    <Widget title="Sales Analysis" inputs={<Inputs />}>
      <div className="flex gap-3 justify-end mt-3">
        <InfoLabel text="Current" color="#009da9" />
        <InfoLabel text="Comparison" color="#007982" />
        <Button secondary>Reset</Button>
        <RadioGroup name="salesAnalysisSign" options={['$', '%']} />
        <RadioGroup
          name="salesAnalysisService"
          options={['Products', 'Venues']}
        />
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
        {(!analys || analys === 'this_month') && (
          <Graph data={thisMonthIncome} currentDataColor="#73ecff" />
        )}
        {analys === 'compare' && (
          <Graph
            data={thisWithPrevMonthIncome}
            currentDataColor="#73ecff"
            compareDataColor="#009da9"
          />
        )}
        {analys === 'best_hours' && <BestHoursGraph />}
      </div>
    </Widget>
  );
};
