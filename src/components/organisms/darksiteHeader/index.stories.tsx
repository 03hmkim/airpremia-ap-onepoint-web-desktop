import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DarksiteHeader from '.';

export default {
  title: 'desktop / Organisms / DarksiteHeader',
  component: DarksiteHeader,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Darksite Header',
  },
};

export const 다크사이트전용헤더: FC = () => {
  return <DarksiteHeader />;
};
