import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Dim from './';

export default {
  title: 'desktop / Atoms / Dim',
  component: Dim,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Dim 컴포넌트 Docs',
  },
};

export const 딤: FC = () => {
  return <Dim>{'children'}</Dim>;
};
