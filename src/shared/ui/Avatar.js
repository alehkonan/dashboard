import React from 'react';
import defaultImg from './avatar.jpg';

export const Avatar = ({ profileImg }) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img src={profileImg || defaultImg} alt="avatar" />
    </div>
  );
};
