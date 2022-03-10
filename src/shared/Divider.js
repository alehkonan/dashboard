import React from 'react';

export const Divider = ({ horizontal = true, vertical }) => {
  return (
    <div className={vertical ? 'h-full border-2' : 'w-full border-2'}></div>
  );
};
