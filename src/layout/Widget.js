import React from 'react';

export const Widget = ({ title, inputs, children }) => {
  return (
    <div className="grid gap-5 my-5">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium opacity-70">{title}</h3>
        {inputs}
      </div>
      {children}
    </div>
  );
};
