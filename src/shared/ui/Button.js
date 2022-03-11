import React from 'react';

export const Button = ({ children, primary, secondary }) => {
  let className = 'flex items-center h-10 p-3 font-medium';
  if (primary) {
    className += ' text-white bg-primary hover:bg-secondary';
  }
  if (secondary) {
    className +=
      ' text-primary bg-white hover:bg-primary hover:text-white border-2 border-primary';
  }

  return <button className={className}>{children}</button>;
};
