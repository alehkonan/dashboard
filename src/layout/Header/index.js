import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { UserControls } from './UserControls';

export const Header = () => {
  return (
    <header className="flex items-center bg-gray-100">
      <h1 className="sr-only">Simplenight</h1>
      <Logo />
      <Navigation />
      <UserControls />
    </header>
  );
};
