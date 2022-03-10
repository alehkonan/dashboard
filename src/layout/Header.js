import React from 'react';
import { MainLogo } from '../shared/ui/MainLogo';
import { Navigation } from './Navigation';
import { UserControls } from './UserControls';

export const Header = () => {
  return (
    <header className="flex bg-gray-50">
      <h1 className="sr-only">Simplenight</h1>
      <MainLogo />
      <Navigation />
      <UserControls />
    </header>
  );
};
