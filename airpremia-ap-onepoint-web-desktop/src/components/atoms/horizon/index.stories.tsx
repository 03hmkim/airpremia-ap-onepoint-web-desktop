import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Horizon, { EBorderShape } from '.';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Atoms / Horizon',
  component: Horizon,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Horizon',
  },
};

export const 수평줄나눔타입1: FC = () => {
  return (
    <Horizon
      color={DARK_GRAY1}
      top={20}
      bottom={20}
      width={2}
    />
  );
};

export const 수평줄나눔타입2: FC = () => {
  return (
    <Horizon
      color={LIGHT_GRAY8}
      top={20}
      bottom={20}
      width={2}
      shape={EBorderShape.DASHED}
    />
  );
};
