import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import HeaderGroup from '.';

export default {
  title: 'desktop / Organisms / HeaderGroup',
  component: HeaderGroup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Cabin Class 구간 하나',
  },
};

export const 헤더그룹: FC = () => {
  return <HeaderGroup />;
};
