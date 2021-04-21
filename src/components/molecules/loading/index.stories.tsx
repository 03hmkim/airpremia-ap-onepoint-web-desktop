import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Loading from '.';

export default {
  title: 'desktop / Molecules / Loading',
  component: Loading,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Loading...',
  },
};

export const 로딩로티: FC = () => {
  return <Loading />;
};
