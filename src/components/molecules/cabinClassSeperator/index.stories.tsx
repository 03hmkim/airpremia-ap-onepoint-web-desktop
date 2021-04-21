import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import CabinClassSeperator from './';

export default {
  title: 'desktop / Molecules / CabinClassSeperator',
  component: CabinClassSeperator,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'CabinClassSeperator',
  },
};

export const 항공권예매성인1인구분선: FC = () => {
  return <CabinClassSeperator />;
};
