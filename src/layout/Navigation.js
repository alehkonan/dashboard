import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const endpoints = [
  {
    id: 1,
    to: '/dashboard',
    title: 'Dashboard',
  },
  {
    id: 2,
    to: '/supply',
    title: 'Supply Manager',
  },
  {
    id: 3,
    to: '/booking',
    title: 'Booking',
  },
];

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex-1 text-primary">
      <nav className="h-full">
        <ul className="h-full flex">
          {endpoints.map(({ id, to, title }) => (
            <Link
              className={`p-5 border-primary ${
                to === pathname ? 'border-b-4' : ''
              }`}
              key={id}
              to={to}
            >
              {title}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
