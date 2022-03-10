import React from 'react';
import { Divider } from '../shared/Divider';
import { Avatar } from '../shared/ui/Avatar';
import { UnitedLogo } from '../shared/ui/UnitedLogo';
import { Menu } from './Menu';

export const UserControls = () => {
  return (
    <div className="flex items-center p-2 pr-10">
      <UnitedLogo />
      <Divider vertical />
      <Avatar />
      <Menu />
    </div>
  );
};
