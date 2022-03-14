import React from 'react';
import { AMOUNTS, DAY_HOURS, WEEK_DAYS } from '../../constants';
import { incomes } from '../../data/incomes';
import { InfoLabel } from '../../shared/ui/InfoLabel';
import { calculateAmount } from '../../utils/calculateAmount';

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
        const amount = calculateAmount(cellsWithIncome);
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
        <div />
        {WEEK_DAYS.map((day) => (
          <span key={day} className="uppercase text-sm text-center">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-9 gap-1 h-60 overflow-y-scroll">
        <div className="grid grid-cols-1 gap-1">
          {DAY_HOURS.map((hour) => (
            <span key={hour} className="uppercase text-sm text-center">
              {hour}
            </span>
          ))}
        </div>
        <div className="col-span-7 grid grid-cols-7 gap-1">
          {cells.map(({ id, amount }) => {
            const { color } =
              Object.values(AMOUNTS).find(({ value }) => amount >= value) || {};
            return (
              <div
                key={id}
                className="w-full h-5"
                style={{ backgroundColor: color }}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute right-5 top-1/4">
        {Object.values(AMOUNTS).map(({ id, text, color }) => (
          <InfoLabel key={id} color={color} text={text} />
        ))}
      </div>
    </div>
  );
};
