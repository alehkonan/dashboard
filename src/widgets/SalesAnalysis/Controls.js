import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../../shared/ui/Button';
import { DatePicker } from '../../shared/ui/DatePicker';
import { InfoLabel } from '../../shared/ui/InfoLabel';
import { RadioGroup } from '../../shared/ui/RadioGroup';
import { Select } from '../../shared/ui/Select';
import { ANALYS_OPTIONS } from './constants';

export const Controls = () => {
  const { search } = useLocation();
  const analysQuery = new URLSearchParams(search).get('analys');

  return (
    <>
      <div className="flex gap-3 justify-end min-h-[44px]">
        {analysQuery === ANALYS_OPTIONS.compare.query && (
          <>
            <Select
              options={[
                { value: 'compareMonth', label: 'Compare Month Before' },
              ]}
            />
            <Select options={[{ value: 'days', label: 'Show Days' }]} />
            <div className="flex">
              <DatePicker initDate={new Date()} />
              <DatePicker initDate={new Date()} />
            </div>
          </>
        )}
        {analysQuery === ANALYS_OPTIONS.bestHours.query && (
          <Select options={[{ value: 'thisMonth', label: 'This Month' }]} />
        )}
      </div>
      <div className="flex gap-3 justify-end mt-3">
        {analysQuery === ANALYS_OPTIONS.compare.query && (
          <>
            <InfoLabel text="Current" color="#009da9" />
            <InfoLabel text="Comparison" color="#007982" />
          </>
        )}

        <Button secondary>Reset</Button>
        <RadioGroup name="salesAnalysisSign" options={['$', '%']} />
        <RadioGroup
          name="salesAnalysisService"
          options={['Products', 'Venues']}
        />
      </div>
    </>
  );
};
