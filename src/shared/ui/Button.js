import React from 'react';

export const Button = ({ children, primary, secondary }) => {
  let className = 'h-10 p-2';
  if (primary) {
    className += ' text-white bg-primary hover:bg-secondary';
  }
  if (secondary) {
    className +=
      ' text-primary bg-white hover:bg-primary hover:text-white border-2 border-primary';
  }

  return <button className={className}>{children}</button>;
};
