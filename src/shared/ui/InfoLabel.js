import React from 'react';

export const InfoLabel = ({ color, text }) => {
  return (
    <div className="flex items-center gap-1">
      <div
        style={{ backgroundColor: color }}
        className="w-3 h-3 rounded-sm"
      ></div>
      <span>{text}</span>
    </div>
  );
};
