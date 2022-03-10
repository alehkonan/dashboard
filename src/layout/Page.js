import React from 'react';

export const Page = ({ title, icon, controls, children }) => {
  return (
    <div className="py-5 px-20">
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <h2 className="flex-1 text-2xl opacity-60">{title}</h2>
        <div>{controls}</div>
      </div>
      {children}
    </div>
  );
};
