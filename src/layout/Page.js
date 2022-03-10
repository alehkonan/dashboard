import React from 'react';

export const Page = ({ title, icon, controls, children }) => {
  return (
    <div>
      <div className="flex items-center gap-4 bg-gray-50 px-20 h-32">
        <div>{icon}</div>
        <h2 className="flex-1 text-2xl opacity-60">{title}</h2>
        <div>{controls}</div>
      </div>
      <div className="px-20">{children}</div>
    </div>
  );
};
