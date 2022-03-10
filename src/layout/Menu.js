import React from 'react';
import { ReactComponent as ArrowDownIcon } from './arrow-down.svg';

export const Menu = () => {
  return (
    <button className="grid place-items-center w-7 h-full bg-secondary">
      <ArrowDownIcon />
    </button>
  );
};
