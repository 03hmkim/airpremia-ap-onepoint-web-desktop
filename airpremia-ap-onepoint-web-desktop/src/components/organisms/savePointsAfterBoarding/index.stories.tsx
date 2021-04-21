import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import SavePointsAfterBoarding from './';

export default {
  title: 'desktop / Organisms / SavePointsAfterBoarding',
  component: SavePointsAfterBoarding,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'SavePointsAfterBoarding',
  },
};

export const 탑승후포인트적립: FC = () => {
  return <SavePointsAfterBoarding />;
};
