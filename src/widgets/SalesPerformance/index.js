import React, { useMemo } from 'react';
import { incomes } from '../../data/incomes';
import { Widget } from '../../layout/Widget';
import { RadioGroup } from '../../shared/ui/RadioGroup';
import { PerformanceCard } from './PerformanceCard';
import { getIncomesByPeriods } from './utils';

export const SalesPerformance = () => {
  const periods = useMemo(() => getIncomesByPeriods(incomes), []);

  return (
    <Widget
      title="Salese Performance"
      controls={
        <div className="flex items-center gap-3">
          <RadioGroup name="salesPerformanceSign" options={['$', '%']} />
          <RadioGroup
            name="salesPerformanceService"
            options={['Products', 'Venues']}
          />
        </div>
      }
    >
      <div className="flex justify-center flex-wrap gap-5">
        {periods.map(({ period, amount }) => (
          <PerformanceCard key={period} period={period} amount={amount} />
        ))}
      </div>
    </Widget>
  );
};
