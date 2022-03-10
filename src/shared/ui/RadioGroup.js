import React from 'react';

export const RadioGroup = ({ name, options }) => {
  return (
    <div className="flex">
      {options?.map((option) => (
        <div
          key={option}
          className="border-2 border-r-0 last:border-r-2 border-primary h-10 p-2"
        >
          <input className="sr-only" type="radio" name={name} id={option} />
          <label htmlFor={option} className="w-full h-full cursor-pointer">
            <span className="h-full w-full">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
