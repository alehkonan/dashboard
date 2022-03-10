import React from 'react';

export const Select = ({ name, options }) => {
  return (
    <select className="p-2 border-2" name={name}>
      {options?.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
