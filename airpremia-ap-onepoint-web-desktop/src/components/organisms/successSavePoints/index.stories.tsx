import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import SuccessSavePoints from './';

export default {
  title: 'desktop / Organisms / SuccessSavePoints',
  component: SuccessSavePoints,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'SuccessSavePoints',
  },
};

export const 탑승후적립_성공시: FC = () => {
  return <SuccessSavePoints />;
};
