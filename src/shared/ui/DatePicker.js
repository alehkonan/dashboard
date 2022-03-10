import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = ({ initDate }) => {
  const [date, setDate] = useState(initDate);
  return (
    <ReactDatePicker
      className="border-2 p-2"
      selected={date}
      onChange={(date) => setDate(date)}
    />
  );
};
