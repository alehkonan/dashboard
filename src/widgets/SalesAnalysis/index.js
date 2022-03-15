import React from 'react';
import { Widget } from '../../layout/Widget';
import { Graph } from './Graph';
import { Controls } from './Controls';
import { Navigation } from './Navigation';

export const SalesAnalysis = () => {
  return (
    <Widget
      title="Sales Analysis"
      controls={<Controls />}
      navigation={<Navigation />}
    >
      <Graph />
    </Widget>
  );
};
