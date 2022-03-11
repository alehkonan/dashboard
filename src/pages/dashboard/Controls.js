import React from 'react';
import { Button } from '../../shared/ui/Button';
import { ReactComponent as CloudIcon } from './cloud.svg';
import { ReactComponent as ShareIcon } from './share.svg';

export const Controls = () => {
  return (
    <div className="flex gap-5">
      <button>
        <ShareIcon className="text-primary hover:text-secondary" />
      </button>
      <button>
        <CloudIcon className="text-primary hover:text-secondary" />
      </button>
      <Button primary>Add Product</Button>
    </div>
  );
};
