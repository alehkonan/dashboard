import React from 'react';
import { Divider } from '../../shared/ui/Divider';
import { Avatar } from '../../shared/ui/Avatar';
import { UnitedLogo } from './UnitedLogo';
import { Menu } from './Menu';
import defaultAvatart from './avatar.jpg';

export const UserControls = () => {
  return (
    <div className="flex items-center mr-8 h-12 bg-white">
      <UnitedLogo />
      <Divider vertical />
      <div className="p-2">
        <Avatar profileImg={defaultAvatart} />
      </div>
      <Menu />
    </div>
  );
};
