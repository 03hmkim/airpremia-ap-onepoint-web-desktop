import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CabinClassHeader from '.';

export default {
  title:
    'desktop / Organisms / 클래스선택 / CabinClassHeader',
  component: CabinClassHeader,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Cabin Class 구간 하나',
  },
};

export const 항공권선택시화폐표기변경가능헤더: FC = () => {
  return <CabinClassHeader />;
};
