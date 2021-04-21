import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CabinClassSpec from '.';
import { ECabinClassType } from '@airpremia/core/stores/models/bookingSession';

export default {
  title: 'desktop / Molecules / CabinClassSpec',
  component: CabinClassSpec,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle:
      'Cabin Class 스펙 설명 (좌석 넓이, 수하물, 와이파이)',
  },
};

export const 케빈클라스스펙이코노미: FC = () => {
  return <CabinClassSpec classType={ECabinClassType.EY} />;
};

export const 케빈클라스스펙프리미엄이코노미: FC = () => {
  return <CabinClassSpec classType={ECabinClassType.PE} />;
};
