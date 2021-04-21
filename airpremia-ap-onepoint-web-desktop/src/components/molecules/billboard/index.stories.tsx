import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import Billboard from './index';

export default {
  title: 'desktop / Molecules / Billboard',
  component: Billboard,
  parameters: {
    componentSubtitle: 'Header 내 한줄 공지',
  },
};

export const 한줄공지: FC = () => {
  return (
    <Billboard
      onClick={action('billboard onClick')}
      onClose={action('billboard onClose')}
    />
  );
};
