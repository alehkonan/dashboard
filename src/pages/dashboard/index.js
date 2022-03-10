import React from 'react';
import { Page } from '../../layout/Page';
import { SalesAnalysis } from '../../widgets/SalesAnalysis';
import { Controls } from './Controls';
import { ReactComponent as DashboardIcon } from './dashboard-icon.svg';

export const DashboardPage = () => {
  return (
    <Page title="Dashboard" icon={<DashboardIcon />} controls={<Controls />}>
      <SalesAnalysis />
    </Page>
  );
};
