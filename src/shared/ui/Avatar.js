import React from 'react';

export const Avatar = ({ profileImg }) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img src={profileImg} alt="avatar" />
    </div>
  );
};
