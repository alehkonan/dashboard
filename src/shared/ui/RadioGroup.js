import React from 'react';

export const RadioGroup = ({ name, options }) => {
  return (
    <div className="flex">
      {options?.map((option, index) => (
        <div key={option}>
          <input
            className="sr-only peer"
            type="radio"
            name={name}
            id={`${name}${option}`}
            defaultChecked={index === 0}
          />
          <label
            htmlFor={`${name}${option}`}
            className="flex items-center border-2 border-primary h-10 p-2 cursor-pointer peer-checked:bg-primary peer-checked:text-white"
          >
            <span className="text-base font-medium">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
