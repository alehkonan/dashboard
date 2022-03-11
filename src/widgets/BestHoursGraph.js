import React from 'react';
import { incomes } from '../data/incomes';
import { InfoLabel } from '../shared/ui/InfoLabel';

const HIGH_AMOUNT = 50000;
const MEDIUM_AMOUNT = 30000;
const LOW_AMOUNT = 10000;

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const dayHours = [
  '12AM',
  '1AM',
  '2AM',
  '3AM',
  '4AM',
  '5AM',
  '6AM',
  '7AM',
  '8AM',
  '9AM',
  '10AM',
  '11AM',
  '12PM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM',
  '6PM',
  '7PM',
  '8PM',
  '9PM',
  '10PM',
  '11PM',
];

export const BestHoursGraph = () => {
  const detailedIncome = incomes.map((income) => ({
    ...income,
    dayOfWeek: new Date(income.date).getDay(),
    hour: new Date(income.date).getHours(),
  }));
  const cells = new Array(168)
    .fill({})
    .map((_, index) => ({
      id: index + 1,
      dayOfWeek: index % 7,
      hour: Math.floor(index / 7),
      amount: 0,
    }))
    .map((cell) => {
      const cellsWithIncome = detailedIncome.filter(
        (income) =>
          income.dayOfWeek === cell.dayOfWeek && income.hour === cell.hour
      );
      if (cellsWithIncome.length) {
        const amount = cellsWithIncome.reduce(
          (prev, acc) => prev + acc.amount,
          0
        );
        return {
          ...cell,
          amount,
        };
      }
      return cell;
    });

  return (
    <div className="w-full relative">
      <div className="grid grid-cols-9 gap-1">
        {['', ...weekDays, ''].map((day) => (
          <span key={day} className="uppercase text-sm text-center">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-9 gap-1 h-60 overflow-y-scroll">
        <div className="grid grid-cols-1 gap-1">
          {dayHours.map((hour) => (
            <span key={hour} className="uppercase text-sm text-center">
              {hour}
            </span>
          ))}
        </div>
        <div className="col-span-7 grid grid-cols-7 gap-1">
          {cells.map(({ id, amount }) => {
            let colorClass;

            if (amount >= HIGH_AMOUNT) {
              colorClass = 'bg-red-300';
            } else if (amount >= MEDIUM_AMOUNT) {
              colorClass = 'bg-orange-300';
            } else if (amount >= LOW_AMOUNT) {
              colorClass = 'bg-yellow-300';
            }

            return <div key={id} className={`w-full h-5 ${colorClass}`} />;
          })}
        </div>
      </div>
      <div className="absolute right-5 top-1/4">
        <InfoLabel color="#d91600" text="Highest" />
        <InfoLabel color="#d97f00" text="Medium" />
        <InfoLabel color="#d9ce00" text="Lowest" />
      </div>
    </div>
  );
};
