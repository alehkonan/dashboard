import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routes';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex-1 text-primary">
      <nav className="h-full">
        <ul className="h-full flex">
          {Object.values(routes).map(({ id, to, title }) => (
            <Link
              className={`p-6 font-medium border-primary hover:bg-primary hover:bg-opacity-10 ${
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
