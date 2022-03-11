import React, { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from './calendar.svg';

const CustomInput = forwardRef((props, ref) => {
  return (
    <div onClick={props.onClick} className="border-2 p-2 flex">
      <input ref={ref} {...props} className="w-20" />
      {/* <label ref={ref}>{props.value || props.placeholder}</label> */}
      <CalendarIcon className="text-secondary cursor-pointer" />
    </div>
  );
});

export const DatePicker = ({ initDate }) => {
  const [date, setDate] = useState(initDate);
  return (
    <ReactDatePicker
      selected={date}
      dateFormat="M/d/yyyy"
      onChange={(date) => setDate(date)}
      customInput={<CustomInput />}
    />
  );
};
