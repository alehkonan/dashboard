import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ANALYS_OPTIONS, ANALYS_QUERY, COMPARE_MONTH_QUERY } from './constants';

export const Navigation = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const analysQuery = searchParams.get(ANALYS_QUERY);

  const onNavigate = (navQuery) => {
    const query = new URLSearchParams();
    query.set(ANALYS_QUERY, navQuery);
    if (navQuery === ANALYS_OPTIONS.compare.query) {
      query.set(COMPARE_MONTH_QUERY, '1');
    }
    navigate({ search: query.toString() });
  };

  return (
    <nav className="border-b-4 mt-[-20px]">
      <ul className="flex">
        {Object.values(ANALYS_OPTIONS).map(({ id, label, query }, index) => (
          <li
            key={id}
            className={`p-3 cursor-pointer border-b-4 mb-[-4px] ${
              (!analysQuery && index === 0) || analysQuery === query
                ? 'border-primary'
                : ''
            } uppercase hover:bg-primary hover:bg-opacity-10 hover:border-primary`}
            onClick={() => onNavigate(query)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
