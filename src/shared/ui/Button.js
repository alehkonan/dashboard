import React from 'react';

export const Button = ({ children }) => {
  return (
    <button className="bg-primary hover:bg-secondary h-10 p-2 text-white">
      {children}
    </button>
  );
};
