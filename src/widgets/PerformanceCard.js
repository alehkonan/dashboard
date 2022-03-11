import React from 'react';
import { formatMoney } from '../utils/formatMoney';

export const PerformanceCard = ({ period, amount }) => {
  return (
    <div className="border-2 flex flex-col justify-center items-center aspect-square">
      <p className="text-3xl text-secondary">{formatMoney(amount)}</p>
      <h4 className="text-lg font-medium opacity-80">{period}</h4>
    </div>
  );
};
