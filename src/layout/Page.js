import React from 'react';

export const Page = ({ title, icon, controls, children }) => {
  return (
    <div>
      <div className="flex items-center gap-5 bg-gray-50 px-20 h-32">
        <div>{icon}</div>
        <h2 className="flex-1 text-3xl font-thin opacity-60">{title}</h2>
        <div>{controls}</div>
      </div>
      <div className="px-28">{children}</div>
    </div>
  );
};
