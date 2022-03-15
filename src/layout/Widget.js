import React from 'react';

export const Widget = ({ title, controls, navigation, children }) => {
  return (
    <div className="grid gap-5 my-6">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium opacity-70">{title}</h3>
        <div className="z-[2]">{controls}</div>
      </div>
      <div className="mt-[-40px] z-[1]">{navigation}</div>
      {children}
    </div>
  );
};
