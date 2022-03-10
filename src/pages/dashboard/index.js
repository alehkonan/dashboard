import React from 'react';
import { Page } from '../../layout/Page';
import { Controls } from './Controls';
import { ReactComponent as DashboardIcon } from './dashboard-icon.svg';

export const DashboardPage = () => {
  return (
    <Page title="Dashboard" icon={<DashboardIcon />} controls={<Controls />}>
      <p>This is page content</p>
    </Page>
  );
};
